import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '../../components/footer'
import Docsimg from '@/components/docs'       
import { Button, Card } from "flowbite-react";          
import Link from "next/link";
import { Camera, Focus, VideoIcon } from 'lucide-react';
function page() {
  return (
    <div className='w-full '>
        <Navbar/>  

        <div className="w-full">
        <div className="w-full h-full flex flex-row bg-stone-100 ">
          <div className="w-1/2 space-y-10 h-full p-6 flex flex-col "> 

          <div className='flex  flex-row justify-start w-full'>
          <Card className="w-1/2">
         <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        TensorFlow.JS Docs
      </h5>
      <p className="font-medium text-gray-700 dark:text-gray-400">
        Visit the official TensorFlow JS docs page for more insights of the model.
      </p>
     <Link href='https://www.tensorflow.org/js'> 
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      </Link>
    </Card>
          </div>

          <div className='flex flex-row justify-end w-full'>
          <Card className="w-1/2">
         <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        CocoSsd Github
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Refer to the documentation of 'CocoSsd'.
      </p>
      <Link href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'> 
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      </Link>
    </Card>
          </div>

          <div className='flex flex-row justify-start w-full'>
          <Card className="w-1/2">
         <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Live-Vision Repository
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Refer to the source code of 'LiveVision'
      </p>
      <Link href='https://github.com/shawn-exe/Live-Vision'> 
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      </Link>
    </Card>
          </div>

        

          </div>
    
            <div
              className="w-1/2 p-5 bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            ><Docsimg/>
            </div>
          
        </div>
      </div>
      {/* Features Section */}
      <div className="w-full flex flex-col p-20 items-center justify-center bg-stone-100 ">
        <div className='w-full text-center font-bold text-[2rem] p-1 text-black'>Features</div>
        <div className='w-full flex flex-row justify-between'>
     
         
          <div className='w-1/4'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-200">
             <Focus/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-center text-black">Object Detection and Tracing</h3>
            <p className="mt-4 text-sm text-gray-800 text-center">
              LiveVision uses Mobilevnet_2 model to detect, identify the object type and trace the object. 
            </p>
          </div>
          <div className='w-1/4'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-200">
            <Camera/>
            </div>
            <h3 className="mt-8 text-lg  font-semibold text-center text-black">Photo Capture and Record</h3>
            <p className="mt-4 text-sm text-gray-800 text-center">
            Provides the option to Capture photo and video manually and save it.
           </p>
          </div>
          <div className='w-1/4'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-200">
              <VideoIcon/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-center text-black">Autorecord and download</h3>
            <p className="mt-4 text-sm text-gray-800 text-center">
             LiveVision also has a feature which felicitates autoRecord when a person it dedicated and saves the recording to the local disk.
            </p>
          </div>
        </div>
      </div>



        <div className="w-full h-[45rem] bg-stone-100 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl">
      <div className="px-2">
      <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
  Leveraging a toolkit including Next.js, TensorFlow.js, and npm, we have engineered <span className='text-blue-900'>'LiveVision'</span>.
</h3>
<p className="mt-4 text-stone-800 text-xl font-medium">
  By harnessing the power of given tools, we are dedicated to crafting top-tier solutions tailored to your needs.
</p>

      </div>
      <div>
        <div className="bg-blue-500 transform -translate-x-10 relative h-64">
        </div>
        <div className="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
          <div className="px-4 flex flex-col w-full space-y-14">
          <div className='flex flex-row justify-start gap-24'>
            <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" height={100} width={100}/>
            <img src="https://next-auth.js.org/img/logo/logo-sm.png" height={100} width={100}/>
          </div>
         
          <div className='flex flex-row justify-end gap-16'>
          <img src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" height={100} width={100}/>
          <img src="https://www.gstatic.com/devrel-devsite/prod/v66c4dc9b65fea2172a0927d7be81b5b5d946ea60fc02578dd7c264b2c2852152/tensorflow/images/lockup.svg" height={200} width={200}/>
          </div>
          
          <div className='flex flex-row justifys-start gap-24'>
          <img src="https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo-sticker.svg" height={200} width={200} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" height={100} width={100}/>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
    </div>
  )
}

export default page