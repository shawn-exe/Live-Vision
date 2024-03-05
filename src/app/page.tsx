import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
    <p className="w-full text-center">Content loading..</p>
    <Link href={"/login"}>
      <Button variant={"grey"}>
        Login
      </Button></Link>
    </>
  )
}


