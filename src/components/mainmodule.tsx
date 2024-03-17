'use client'
import { Button } from './ui/button'
import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
type Props = {}

const MainModule = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
   // const [mirrored,setMirrored]=useState<boolean>(false);
  return (
    <div className='w-full flex flex-col items-center gap-2'>
        <div className='relative'> 
            <div className=' w-full relative border-secondary/5 border-2 shadow-md'>
            <Webcam width={800} ref={webcamRef} mirrored={true} className=' object-contain' />
            <canvas ref={canvasRef} className='h-full w-full absolute top-0 left-0 object-contain' ></canvas>
            </div>
        </div>
        <div className='w-[400px] py-2 flex flex-row justify-center space-x-10 mb-2 border-secondary/5 border-2 shadow-md rounded-md'>
             <Button>abcd</Button>
             <Button>abcd</Button>
             <Button>abcd</Button>
        </div>
        


    </div>
  )
}

export default MainModule