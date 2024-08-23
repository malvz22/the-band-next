/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "./Components/Hero";
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px] m-auto">
        <Hero />
        <section
          id="band-section"
          className="container max-w-[800px] mx-auto py-[64px] px-[16px]"
        >
          <h1 className="text-center text-[30px] tracking-[4px] my-[10px]">
            THE BAND
          </h1>
          <p className=" text-center text-[15px] italic opacity-75 my-[15px]">
            We love music
          </p>
          <p className="text-[15px]">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="flex flex-col md:flex-row justify-around py-[32px]">
            <div className="flex flex-col items-center text-center md:max-w-[150px]">
              <p className="py-[15px]">Name</p>
              <Image
                src={"/bandmember.jpg"}
                width={400}
                height={0}
                alt="bandmember"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center md:max-w-[150px]">
              <p className="py-[15px]">Name</p>
              <Image
                src={"/bandmember.jpg"}
                width={400}
                height={0}
                alt="bandmember"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center md:max-w-[150px]">
              <p className="py-[15px]">Name</p>
              <Image
                src={"/bandmember.jpg"}
                width={400}
                height={0}
                alt="bandmember"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
      <section
        id="tour-section"
        className="max-w-[2000px] m-auto bg-black text-white"
      >
        <div className="container max-w-[800px] mx-auto py-[64px] px-[16px]">
          <h1 className="text-center text-[30px] tracking-[4px] my-[10px]">
            TOUR DATES
          </h1>
          <p className=" text-center text-[15px] italic opacity-75 my-[15px]">
            Remember to book your tickets!
          </p>
          <div className="text-black bg-white p-2 border-solid border-black">
            September
          </div>
          <div className="text-black bg-white p-2">October</div>
          <div className="text-black bg-white p-2">November</div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
            <div className="max-w-full flex flex-col">
              <Image src={"/nyc.jpg"} width={600} height={0} alt="bandmember" />
              <div className="bg-white px-4">
                <p className="text-black font-bold text-[15px] my-[15px]">
                  New York
                </p>
                <p className="text-black opacity-75 text-[15px]  my-[15px]">
                  Fri 27 Nov 2016
                </p>
                <p className="text-black text-[15px]  my-[15px]">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <div className="flex flex-row justify-start">
                  <div className="bg-black hover:bg-gray-300 hover:text-black text-center px-3 py-2 mb-4 text-[15px] cursor-pointer">
                    Buy Tickets
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full flex flex-col">
              <Image
                src={"/paris.jpg"}
                width={600}
                height={0}
                alt="bandmember"
              />
              <div className="bg-white px-4">
                <p className="text-black font-bold text-[15px] my-[15px]">
                  Paris
                </p>
                <p className="text-black opacity-75 text-[15px]  my-[15px]">
                  Sat 28 Nov 2016
                </p>
                <p className="text-black text-[15px]  my-[15px]">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <div className="flex flex-row justify-start">
                  <div className="bg-black hover:bg-gray-300 hover:text-black text-center px-3 py-2 mb-4 text-[15px] cursor-pointer">
                    Buy Tickets
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full flex flex-col">
              <Image src={"/sf.jpg"} width={600} height={0} alt="bandmember" />
              <div className="bg-white px-4">
                <p className="text-black font-bold text-[15px] my-[15px]">
                  San Francisco
                </p>
                <p className="text-black opacity-75 text-[15px]  my-[15px]">
                  Sun 29 Nov 2016
                </p>
                <p className="text-black text-[15px]  my-[15px]">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <div className="flex flex-row justify-start">
                  <div className="bg-black hover:bg-gray-300 hover:text-black text-center px-3 py-2 mb-4 text-[15px] cursor-pointer">
                    Buy Tickets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section" className="max-w-[2000px] m-auto">
        <div className="container max-w-[800px] mx-auto py-[64px] px-[16px]">
          <h1 className="text-center text-[30px] tracking-[4px] my-[10px]">
            CONTACT
          </h1>
          <p className=" text-center text-[15px] italic opacity-75 my-[15px]">
            Fan? Drop a note!
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col text-[18px]">
              <div className="flex flex-row items-center">
                <FaMapMarkerAlt className="me-3" />
                <p>Chicago, US</p>
              </div>
              <div className="flex flex-row items-center">
                <FaPhoneAlt className="me-3" />
                <p>Phone: +00 151515</p>
              </div>
              <div className="flex flex-row items-center">
                <IoMdMail className="me-3" />
                <p>Email: mail@mail.com</p>
              </div>
            </div>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className="p-2 border border-gray-400 w-full sm:w-[185px]"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="p-2 border border-gray-400 w-full sm:w-[185px]"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <input
                className="p-2 border border-gray-400"
                type="text"
                placeholder="Message"
              />
              <div className="flex flex-row justify-end">
                <div className="bg-black text-white hover:bg-gray-300 hover:text-black text-center px-3 py-2 mb-4 text-[15px] cursor-pointer">
                  SEND
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Image
        src={"/map.jpg"}
        width={2000}
        height={0}
        alt="map"
        className="grayscale-[50%]"
      />
    </>
  );
}
