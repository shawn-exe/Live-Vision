import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="w-full h-20 fixed top-0 bg-black bg-opacity-80 backdrop-blur-lg flex items-center justify-between px-10 text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="flex gap-20 text-white">
            <li>
                <Link href="/">
                  <p>Product</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Docs</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/">
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