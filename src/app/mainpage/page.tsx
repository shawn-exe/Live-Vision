import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
async function page () {
  const session=await getServerSession(authOptions)
  if(session?.user)
  {
    return (
      <div className='text-2xl text-red-600 font-extrabold'>...Page to be built...</div>
    )
  }
  return (
    <div>please login</div>
  )
}

export default page