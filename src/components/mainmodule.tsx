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
      canvaselement(canvasRef,webcamRef);
      drawOnCanvas(predictions,canvasRef.current?.getContext('2d'))
    }
  }

  useEffect(()=>
    {
      interval=setInterval(()=>{
        runPrediction();
      },100)
      return()=>clearInterval(interval);//To clear the previous intervals.. incase of reload
    },[webcamRef.current,model])
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
          if(name==='person')
          {
            ctx.fillStyle='#FF0F0F';
          }
          ctx.globalAlpha=0.4;
          ctx.roundRect( x, y, width, height, 8);
          ctx.fill();
        }
      })
    }

