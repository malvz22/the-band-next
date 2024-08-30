/* eslint-disable react/no-unescaped-entities */
`use client`;
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main className="relative flex h-[800px] w-[2000px] flex-col justify-center items-center">
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
      </main>
    </>
  );
}
