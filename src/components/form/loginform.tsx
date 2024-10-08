"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"


const FormSchema = z.object({
  email: z.string().min(1,"Email is required").email('Invalid Email'),
  password: z.string().min(1,"Password is required")
})

export default function loginform() {
  const router=useRouter ();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  })

  const onSubmit = async (values:z.infer<typeof FormSchema>)=>
  {
    const signIndata=await signIn('credentials',
    {
      email:values.email,
      password:values.password,
      redirect:false,
    });
    if(signIndata?.error)
    {
      toast({
        description: "Invalid Credentials...Try again",
        variant:"destructive"
      })
    }else{
      router.refresh();
      router.push('/mainpage');
      toast({
        description: "Login Successfull",
        variant:"positive"
      })
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
            <h3 className="text-center font-sans font-bold text-blue-600 text-2xl">Log In</h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
        </div>

        <Button className="w-full mt-6" type="submit">Login</Button>
      </form>

       <div className="mx-auto my-4 flex w-full items-center justify-evenly">or</div>
       <p className="text-center text-sm text-gray-600 mt-2">
        Don&apos;t have an account? <Link href={'/signup'} className="text-blue-600">Sign up</Link>
       </p>
    </Form>
  )
}
