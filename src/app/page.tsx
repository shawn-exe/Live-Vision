import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Reactfooter from "@/components/footer";
import Homegraphic from "@/components/homegraphic";

export default function Home() {
  return (
    <div className="flex flex-col space-y-1">
      <Navbar />
      {/* <Link href={"/login"}>
        <Button variant={"grey"}>Login</Button>
      </Link> */}

      <div className="flex flex-row h-[35rem] w-full ">
        {/* left part */}
        <div className="w-1/2  h-full flex flex-row items-center ml-28">
          <Homegraphic/>
        </div>

        {/* right part */}
        <div className="w-1/2 p-10 pt-16">
          <div className="w-full  text-left text-[3rem] font-Wallpoet text-gray-300 ">
            Welcome to
          </div>
          <div className="w-full text-right text-[5rem] font-Wallpoet text-gray-300 ">
            "LiveVision"
          </div>
          <div className="w-full text-center text-[0.7rem] font-poppins text-red-600 ">
           --A combination of machine learning and computer vision integrated along with Next.js--
          </div>

{/* //login and signUp buttons */}
          <div className=" w-full h-1/2 flex flex-row space-x-5 justify-center items-center">
             <Link href={"/login"}>
              <Button variant={"default"}>Login</Button>
             </Link>
             <div className="text-center text-[1.3rem] font-poppins text-gray-400 ">-or-</div>
             <Link href={"/signup"}>
              <Button variant={"default"}>signUp</Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Reactfooter />
      </div>
    </div>
  );
}
