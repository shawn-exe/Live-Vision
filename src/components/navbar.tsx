import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
      <div className="w-full px-10 h-24 bg-black fixed top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="flex gap-20 text-white">
            <li>
                <Link href="/about">
                  <p>Product</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Docs</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
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