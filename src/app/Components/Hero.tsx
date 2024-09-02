/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* <main className="relative flex h-[800px] w-[2000px] flex-col justify-center items-center">
        <div className="absolute w-full h-full">
          <Image
            src={"/chicago.jpg"}
            alt="hero image"
            className="w-full h-full object-cover object-center"
            sizes="100vw"
            fill
          />
          <div className="hidden sm:flex flex-col absolute text-white translate-x-[-50%] left-[50%] bottom-[1%] text-center px-[16px] py-[32px]">
            <h1 className="text-2xl my-3">Chicago</h1>
            <p className="text-sm font-bold">
              Thank you, Chicago - A night we won't forget.
            </p>
          </div>
        </div>
      </main> */}
      <div className="max-w-full w-[2000px] mx-auto">
        <Slider {...settings}>
          <div className="relative">
            <Image src={"/chicago.jpg"} alt="chicago" width={2000} height={0} />
            <div className="flex flex-col absolute text-white translate-x-[-50%] left-[50%] bottom-[1%] text-center px-[16px] py-[32px]">
              <h1 className="text-2xl my-3">Chicago</h1>
              <p className="text-sm font-bold">
                Thank you, Chicago - A night we won't forget.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src={"/la.jpg"} alt="los angeles" width={2000} height={0} />
            <div className="flex flex-col absolute text-white translate-x-[-50%] left-[50%] bottom-[1%] text-center px-[16px] py-[32px]">
              <h1 className="text-2xl my-3">Los Angeles</h1>
              <p className="text-sm font-bold">
                We had the best time playing at Venice Beach!
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src={"/ny.jpg"} alt="new york" width={2000} height={0} />
            <div className="flex flex-col absolute text-white translate-x-[-50%] left-[50%] bottom-[1%] text-center px-[16px] py-[32px]">
              <h1 className="text-2xl my-3">New York</h1>
              <p className="text-sm font-bold">
                The atmosphere in New York is vibrant!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
