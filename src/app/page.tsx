import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col space-y-1">
    <Navbar/>
    <Link href={"/login"}>
      <Button variant={"grey"}>
        Login
      </Button></Link>
    </div>
  )
}


