import { NextResponse } from "next/server";
import prisma  from "@/lib/db";
import {hash} from 'bcrypt';
import * as z from 'zod';
const validate = z.object({
    email: z.string().min(1,"Email is required").email('Invalid Email'),
    password: z.string().min(1,"Password is required"),
})
  

export async function POST(req: Request){
    try{
        const body= await req.json();
        const {email,password}=validate.parse(body);
        const checkifexist = await prisma.user.findUnique({
            where:{email:email}
        })
        if(checkifexist){
            return NextResponse.json({user:null,message: "User already exisits"},{status:409})
        }

        const hashpassword=await hash(password,10);
        const newuser=await prisma.user.create({
            data:{
                email,
                password:hashpassword
            }
        });
        //const {password: newuserpassword, ...rest } =newuser; --If we want to stop password from being sent out as the response
        return NextResponse.json({user:newuser,message:"New user created successfully!"},{status:201})
    }catch(error){
        return NextResponse.json({message:"Error while creating the user..."},{status: 500})
    }
}