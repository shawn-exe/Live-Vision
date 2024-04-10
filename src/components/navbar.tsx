'use client'
import React,{useState} from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('');
  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full h-30 bg-black bg-opacity-80 backdrop-blur-lg flex items-center justify-between px-10 text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="flex flex-row items-center gap-20 text-white">
            <li>
            <Link href="/" className={activeLink === "home" ? "pb-1 underline text-[1.2rem]" : ""}
             onClick={() => handleSetActiveLink("home")}>
            <p>Home</p>
            </Link>

              </li>
              {/* <li>
                <Link href="/">
                  <p>Product</p>
                </Link>
              </li> */}
              <li>
                <Link href="/docs" className={activeLink === "docs" ? "pb-1 underline text-[1.2rem]" : ""}
             onClick={() => handleSetActiveLink("docs")}>
                  <p>Docs</p>
                </Link>
              </li>
              <li>
                <Link href="/about"  className={activeLink === "about" ? "pb-1 underline text-[1.2rem]" : ""}
             onClick={() => handleSetActiveLink("about")}>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/contactus" className={activeLink === "contactus" ? "pb-1 underline text-[1.2rem]" : ""}
             onClick={() => handleSetActiveLink("contactus")}>
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  );
};

export default Navbar;