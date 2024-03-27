'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '../../components/footer'
import Members from '../../components/members'
import Mentors from '@/components/mentors'
export default function AboutPageOne() {
  return (
    <div>
        <Navbar/>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 py-10">
          <p className="text-3xl font-bold text-gray-300 md:text-5xl md:leading-10">
          <span className='font-bold text-pink-600'>Designed</span> and <span className='font-bold text-pink-600'>Developed</span> right here in <span className='font-bold text-red-700'>Nitte</span>
          </p>
          <p className="w-full text-base font-poppins text-gray-400 ">
          At LiveVision, we leverage cutting-edge computer vision technology to empower users with accurate human and object detection capabilities. Our mission is to simplify complex visual recognition tasks, providing users with seamless and efficient solutions for a wide range of applications.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
        <iframe  id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3884.6730531354474!2d74.933989!3d13.1830026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1711471971214!5m2!1sen!2sin" width={1200} height={500}></iframe>
        </div>     
        <hr className="mt-10" />
        <div className="w-full mt-10 flex items-center text-center">
          <div className="w-full space-y-6 text-center">
            <p className="text-center text-3xl font-bold underline text-gray-300 md:text-4xl">Meet our team</p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <Members/> 
        </div>
        <hr className="mt-10" />
        <div className="w-full mt-10 flex items-center text-center">
          <div className="w-full space-y-6 text-center">
            <p className="text-center text-3xl font-bold underline text-gray-300 md:text-4xl">Under the guidance of</p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <Mentors/> 
        </div>
      </div>
       <Footer/>
    </div>
  )
}
