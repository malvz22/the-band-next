"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="bg-black flex flex-col max-w-full drop-shadow-md sticky top-0 z-50">
        <div className="flex flex-row text-[15px] justify-between">
          <div className="flex flex-row">
            <a
              href="#"
              className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer"
            >
              HOME
            </a>
            <div className="hidden sm:flex flex-row">
              <p className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
                BAND
              </p>
              <p className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
                TOUR
              </p>
              <p className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
                CONTACT
              </p>
              <p className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
                MORE
              </p>
            </div>
          </div>
          <div className="hidden sm:flex text-white px-6 py-3 items-center hover:bg-red-500">
            <FaSearch className="text-white" />
          </div>
          <div
            className="flex sm:hidden text-white hover:text-black px-6 py-3 items-center hover:bg-[#cccccc]"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div className={showMenu ? "flex flex-col" : "hidden"}>
          <Link onClick={handleClick} href="#band-section">
            <div className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
              BAND
            </div>
          </Link>
          <Link onClick={handleClick} href="#tour-section">
            <div className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
              TOUR
            </div>
          </Link>
          <Link onClick={handleClick} href="#contact-section">
            <div className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
              CONTACT
            </div>
          </Link>
          <Link onClick={handleClick} href={"#"}>
            <div className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer">
              MERCH
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
