import nextAuth from "next-auth";
//This is used for providing types to the tokens and session
declare module "next-auth"{
    interface User {
        email: string
    }
    interface Session{
        user: User & {
            email: string
        }
        token:{
            email:string
        }
    }
}