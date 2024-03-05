"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

const FormSchema = z.object({
  email: z.string().min(1,"Email is required").email('Invalid Email'),
  password: z.string().min(1,"Password is required")
})

export default function loginform() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit =(values:z.infer<typeof FormSchema>)=>
  {
    console.log(values)
  }
 

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
            <h3 className="text-center">Login</h3>
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
