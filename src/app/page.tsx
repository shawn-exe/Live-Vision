import React from "react";
import Navbar from "@/components/navbar"
import {Button} from "@nextui-org/react";
import { Button1 } from "@/components/ui/button";
export default function Home() {
  return (
    <>
    <Navbar/>
    <p className="w-full text-center">Content loading..</p>
<Button color="primary">
      NextUI
    </Button>
    <Button1 variant={"grey"} >shadCN-UI</Button1>
    </>
  )
}


