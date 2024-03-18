'use client'
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import * as cocossd from '@tensorflow-models/coco-ssd';
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import { DetectedObject, ObjectDetection } from '@tensorflow-models/coco-ssd';

type Props = {}
let interval: any =null;
const MainModule = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [model,setModel]=useState<ObjectDetection>();
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
    if(model && webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4)
    {
      const predictions: DetectedObject[] = await model.detect(webcamRef.current.video);
      console.log(predictions);
    }
  }

  useEffect(()=>
    {
      interval=setInterval(()=>{
        runPrediction();
      },100)
      return()=>clearInterval(interval);//To clear the previous intervals.. incase of reload
    },[webcamRef.current,model])//Mirrored state is not added here
  
   
  
  return (
    <div className='w-full flex flex-col items-center gap-2'>
        <div className='relative'> 
            <div className=' w-full relative border-secondary/5 border-2 shadow-md'>
            <Webcam width={800} ref={webcamRef} mirrored={true} className=' object-contain' />
            <canvas ref={canvasRef} className='h-full w-full absolute top-0 left-0 object-contain' ></canvas>
            </div>
        </div>
    </div>
  )
}

export default MainModule
