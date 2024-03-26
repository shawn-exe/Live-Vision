import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
export default function Memebers() {
  return (
    <div className="h-[30rem] w-1/2">
      <Carousel slideInterval={2000}>
            <Card className="h-5/6 w-[26rem] py-2 text-center" >
            <div className=" w-full flex justify-center items-center">
                <img src="https://media.licdn.com/dms/image/D5603AQEgdrP70ZK9Gw/profile-displayphoto-shrink_400_400/0/1690347837790?e=1717027200&v=beta&t=tchI5DwJMUPHmuNNGPgk-Rn5UqAnbATQhTnrhEakc3I" className="h-[300px] w-full rounded-lg object-cover" alt="" />
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shawn Salis
            </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                3rd year CSE, NMAMIT 
            </p>
            </Card>

            <Card className="h-5/6 w-[26rem] py-2 text-center" >
            <div className=" w-full flex justify-center items-center">
                <img src="https://media.licdn.com/dms/image/D4D03AQEqk1IjCT3tpg/profile-displayphoto-shrink_400_400/0/1690473208783?e=1717027200&v=beta&t=tB12n9tO5cyq_qH5Vn8eWhyLkbETGghG4CzRRE1wymA" className="h-[300px] w-full rounded-lg object-cover" alt="" />
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Aprameya P Bhat
            </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                3rd year CSE, NMAMIT 
            </p>
            </Card>
      </Carousel>
    </div>
  );
}
