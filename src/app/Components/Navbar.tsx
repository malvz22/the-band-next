"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  function handleHover() {
    setShowMore(!showMore);
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
              <a
                href="#band-section"
                className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer"
              >
                BAND
              </a>
              <a
                href="#tour-section"
                className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer"
              >
                TOUR
              </a>
              <a
                href="#contact-section"
                className="px-6 py-3 text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer"
              >
                CONTACT
              </a>
              <div
                onClick={handleHover}
                className="flex flex-row px-6 py-3 items-center text-white hover:bg-[#CCCCCC] hover:text-black cursor-pointer relative"
              >
                <p>MORE</p>
                <TiArrowSortedDown />
                <div
                  className={
                    showMore
                      ? "absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[250%] left-[55.6%]"
                      : "hidden"
                  }
                >
                  <p className="bg-white px-4 py-3 text-black hover:bg-[#CCCCCC]">
                    Merchandise
                  </p>
                  <p className="bg-white px-4 py-3 text-black hover:bg-[#CCCCCC]">
                    Extras
                  </p>
                  <p className="bg-white px-4 py-3 text-black hover:bg-[#CCCCCC]">
                    Media
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hidden sm:flex text-white px-6 py-3 items-center hover:bg-red-500">
            <FaSearch className="text-white" />
          </div> */}
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
