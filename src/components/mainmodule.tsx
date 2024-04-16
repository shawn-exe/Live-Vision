'use client'
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { Camera, Cctv, Video } from 'lucide-react'
import { Button } from './ui/button'
import { toast, useToast } from "@/components/ui/use-toast"
import { Circles } from 'react-loader-spinner';
import * as cocossd from '@tensorflow-models/coco-ssd';
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import { DetectedObject, ObjectDetection } from '@tensorflow-models/coco-ssd';
import alertsound from './alert/alertsound';
import { Slider } from './ui/slider'

type Props = {}
let interval: any =null;
let stopTimeout: any = null;
const MainModule = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [model,setModel]=useState<ObjectDetection>();
    const [detectedObjectName, setDetectedObjectName] = useState('');
    const [volume,setVolume]=useState<number>(0.8)
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [autoRecordEnabled, setAutoRecordEnabled] = useState<boolean>(false)
    const mediaRecorderRef = useRef<MediaRecorder|null> (null);

    useEffect(() => {
      if (webcamRef && webcamRef.current) {
        const stream = (webcamRef.current.video as any).captureStream();
        if (stream) {
          mediaRecorderRef.current = new MediaRecorder(stream);
  
          mediaRecorderRef.current.ondataavailable = (e) => {
            if (e.data.size > 0) {
              const recordedBlob = new Blob([e.data], { type: 'video' });
              const videoURL = URL.createObjectURL(recordedBlob);
              const a = document.createElement('a');
              a.href = videoURL;
              a.download = `${formatDate(new Date())}.webm`;
              a.click();
            }
          };

          //The below 2 lines are necessary for the colour effect
          //on the video button
          mediaRecorderRef.current.onstart = (e) => {
            setIsRecording(true);
          }
          mediaRecorderRef.current.onstop = (e) => {
            setIsRecording(false);
          }
        }
      }
    }, [webcamRef])


    useEffect(()=>
    {
      initModel();
    },[])

    async function initModel() {
      const loadedModel: ObjectDetection = await cocossd.load({base:'mobilenet_v2'});
      setModel(loadedModel);
    }

  async function runPrediction()
  {
    console.log(webcamRef.current);
    if(model && webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4)
    {
      const predictions: DetectedObject[] = await model.detect(webcamRef.current.video);
      canvaselement(canvasRef,webcamRef);
      drawOnCanvas(predictions,canvasRef.current?.getContext('2d'));
      let isPerson: boolean = false;
      if (predictions.length > 0) {
        predictions.forEach((prediction) => {
          isPerson = prediction.class === 'person';
          setDetectedObjectName(prediction.class);
        })
        if (isPerson && autoRecordEnabled) 
          {
            startRecording(true);
          }
      }  
    }
  }

  useEffect(()=>
    {
      interval=setInterval(()=>{
        runPrediction();
      },100)
      return()=>clearInterval(interval);//To clear the previous intervals.. incase of reload
    },[webcamRef.current,model,autoRecordEnabled])
    

  return (
    <div className='w-full flex flex-col items-center gap-2'>
        <div className='relative'> 
            <div className=' w-full relative border-secondary/5 border-2 shadow-md'>
            <Webcam width={800} ref={webcamRef} mirrored={true} className=' object-contain' />
            <canvas ref={canvasRef} className='h-full w-full absolute top-0 left-0 object-contain' ></canvas>
            </div>
        </div>
        <div className='w-[800px] py-2 flex flex-row justify-center space-x-10 gap-3 border-secondary/5 border-2 shadow-md rounded-md'>
             <Button variant={"default"} size={'icon'} onClick={clickphoto} >
              <Camera />
             </Button>
             <Button variant={isRecording ? "destructive" : "default"} size={'icon'} onClick={RecordVideo} >
              <Video />
             </Button>
             <Button variant={autoRecordEnabled ? "destructive" :"default"} size={'icon'} onClick={startautorecord}>
             {autoRecordEnabled ? <Circles color='white' height={25}/> : <Cctv/>}
             </Button> 
             <Slider  
                  max={1}
                  min={0}
                  step={0.2}
                  defaultValue={[volume]}
                  onValueCommit={(val) => {
                    setVolume(val[0]);
                    alertsound(val[0]);
                  }}
                />    
        </div>
        <div className='text-white text-md w-[400px] flex flex-row justify-center items-center text-center font-Cabin '>Detected object : <span className='text-xl font-bold'>{detectedObjectName}</span></div>
    </div>
  )

  function RecordVideo() {
    if (!webcamRef.current) {
      console.log("camera is not on")
    }
    if (mediaRecorderRef.current?.state == 'recording') {
      mediaRecorderRef.current.requestData();
      clearTimeout(stopTimeout);
      mediaRecorderRef.current.stop();  
    } else { 
      startRecording(false);
      console.log("recording is stopped and saved");
    }
  }

  function startRecording(makesound: boolean) {
    if (webcamRef.current && mediaRecorderRef.current?.state !== 'recording') {
      mediaRecorderRef.current?.start();
      makesound && alertsound(volume)  
      stopTimeout = setTimeout(() => {
        if (mediaRecorderRef.current?.state === 'recording') {
          mediaRecorderRef.current.requestData();
          mediaRecorderRef.current.stop();
        }
      }, 20000);
    }
  }

  function startautorecord()
  {
      if(autoRecordEnabled)
      {
        setAutoRecordEnabled(false);
        toast({
          description: "AutoRecord Disabled",
          variant:"default"
        })
      }
      else
      {
        setAutoRecordEnabled(true);
        toast({
          description: "AutoRecord Enabled",
          variant:"default"
        })
      }
  }


  function clickphoto() {
    if(!webcamRef.current){
      console.log("camera is not on")
    }else{
      const imgSrc = webcamRef.current.getScreenshot();
      console.log(imgSrc);
      const blob = base64toBlob(imgSrc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${formatDate(new Date())}.png`
      a.click();
    }
  }



}

export default MainModule

function canvaselement(canvasRef: React.RefObject<HTMLCanvasElement>, webcamRef: React.RefObject<Webcam>) {
  const canvas = canvasRef.current;
  const video = webcamRef.current?.video;
  if((canvas && video))
  {
    const{videoWidth,videoHeight}=video;
    canvas.width=videoWidth;
    canvas.height=videoHeight;
  }
}

function drawOnCanvas(
    predictions: DetectedObject[], 
    ctx: CanvasRenderingContext2D | null | undefined)
    {
      predictions.forEach((detectedobjs: DetectedObject)=>
      {
        const {class: name , bbox ,score}= detectedobjs;
        const [x,y,width,height]=bbox;
        if(ctx)
        {
          ctx.beginPath();
          ctx.fillStyle = name === 'person' ? '#00B612' : '#FF0F0F';
          ctx.globalAlpha=0.4;
          ctx.roundRect(ctx.canvas.width- x, y, -width, height, 1);
          ctx.fill();
        }
      })
}

function base64toBlob(base64Data: any) {
  const byteCharacters = atob(base64Data.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(byteCharacters.length);
  const byteArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: "image/png" });
}

function formatDate(d: Date) {
  const formattedDate =
    [
      (d.getMonth() + 1).toString().padStart(2, "0"),
      d.getDate().toString().padStart(2, "0"),
      d.getFullYear(),
    ]
      .join("-") +
    " " +
    [
      d.getHours().toString().padStart(2, "0"),
      d.getMinutes().toString().padStart(2, "0"),
      d.getSeconds().toString().padStart(2, "0"),
    ].join("-");
  return formattedDate;
}