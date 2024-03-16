import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Signoutbtn from '@/components/signoutbtn'
import Loginform from '@/components/form/loginform'
import Link from 'next/link'
async function page () {
  const session=await getServerSession(authOptions)
  if(session?.user)
  {
    return (
      <>
      <Signoutbtn/>
      <div className='text-2xl text-red-600 font-extrabold'>...Page to be built...</div>
      </>
    )
  }
  return (
    <div className='text-2xl text-red-600 font-extrabold' >please login</div>
  )
}

export default page