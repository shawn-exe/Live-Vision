"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {useRouter} from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const FormSchema = z.object({
  email: z.string().min(1,"Email is required").email('Invalid Email'),
  password: z.string().min(1,"Password is required"),
  confirmpassword: z.string().min(1,"Password confirmation is required")
})
.refine((data)=>data.password===data.confirmpassword,{
    path:['confirmpassword'],
    message:'Password do not match'
})

export default function signupform() {
const router=useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password:''
    },
  })

  const onSubmit =async (values:z.infer<typeof FormSchema>)=>
  {
    const response =await fetch('/api/registeruser', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:values.email,
        password:values.password
      })
    })
    if(response.ok)
    {
      router.push('/login');
    }
    else{
      console.log("user cannot be added");
    }
  }
 

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
      <h3 className="text-center">Sign Up</h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>username</FormLabel>
              <FormControl>
                <Input placeholder="email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Re-Enter password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <Button className="w-full mt-6" type="submit">Login</Button>
      </form>

       <div className="mx-auto my-4 flex w-full items-center justify-evenly">or</div>
       <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account? <Link href={'/login'} className="text-blue-600">Login</Link>
       </p>
    </Form>
  )
}
