'use client';
import Logo from './footerlogo';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Reactfooter() {
  return (
    <Footer container className='w-full p-2 bg-black bg-opacity-80 backdrop-blur-lg text-gray-300'>
      <div className="w-full">
        <div className="grid p-0 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='w-[40rem] flex justify-center items-center'>
            <Logo/>
          </div>
          <div className="grid p-0 grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <div className='w-full text-gray-500 text-sm font-poppins'>
              "Unlocking the potential of vision technology to enhance human experiences - Explore the world with LiveVision."
              </div>
              {/* <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup> */}
            </div>
            <div className='flex p-0 flex-col justify-center items-center'>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/shawn-exe">Github</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/shawnxsalis/">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='flex p-0 flex-col justify-center items-center pr-3'>
            <Footer.Title title="Social handles" />
                <div className=" flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="https://github.com/shawn-exe" icon={BsInstagram} />
                <Footer.Icon href="https://github.com/shawn-exe" icon={BsTwitter} />
                <Footer.Icon href="https://github.com/shawn-exe" icon={BsGithub} />
            </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full text-center p-0'>
          <Footer.Copyright href="#" by="livevisionDEV" year={2024} />
        </div>
      </div>
    </Footer>
  );
}
