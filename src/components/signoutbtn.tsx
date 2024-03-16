'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

function signoutbtn() {
  return (
    <div>   
        <Button variant={"destructive"} onClick={()=>signOut({
            redirect:true,
            callbackUrl: `${window.location.origin}/login`,
        })}>LogOut</Button>
    </div>
  )
}

export default signoutbtn