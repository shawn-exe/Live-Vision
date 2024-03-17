import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Signoutbtn from '@/components/signoutbtn'
import Loginform from '@/components/form/loginform'
import Link from 'next/link'
import MainModule from '@/components/mainmodule'
async function page () {
  const session=await getServerSession(authOptions)
  if(session?.user)
  {
    return (
      <div className='h-full w-full flex flex-col '>
        <div className=' w-full flex flex-row justify-end px-10 pt-3'>
         <Signoutbtn/>
        </div>
        <div className='flex flex-col justify-center mt-1'>
        <MainModule/>
        </div>
      </div>
    )
  }
  return (
    <div className='text-2xl text-red-600 font-extrabold' >please login</div>
  )
}

export default page