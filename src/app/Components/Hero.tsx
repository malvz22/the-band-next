/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-full relative">
      <Image
        src={"/chicago.jpg"}
        alt="hero image"
        layout="responsive"
        width={1080}
        height={0}
      />
      <div className="hidden sm:flex flex-col absolute text-white translate-x-[-50%] left-[50%] bottom-[1%] text-center px-[16px] py-[32px]">
        <h1 className="text-2xl my-3">Chicago</h1>
        <p className="text-sm font-bold">
          Thank you, Chicago - A night we won't forget.
        </p>
      </div>
    </div>
  );
}
