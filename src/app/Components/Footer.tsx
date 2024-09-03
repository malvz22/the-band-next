import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-8 py-16 gap-5">
        <div className="flex flex-row">
          <FaFacebookSquare
            size={24}
            className="text-[#666666] hover:opacity-55"
          />
          <FaInstagram size={24} className="text-[#666666] hover:opacity-55" />
          <FaSnapchatSquare
            size={24}
            className="text-[#666666] hover:opacity-55"
          />
          <FaPinterestSquare
            size={24}
            className="text-[#666666] hover:opacity-55"
          />
          <FaSquareXTwitter
            size={24}
            className="text-[#666666] hover:opacity-55"
          />
          <FaLinkedin size={24} className="text-[#666666] hover:opacity-55" />
        </div>
        <div className="flex flex-col text-center md:flex-row gap-4 text-[15px] opacity-70">
          <Link href={"#"}>
            <p>Home</p>
          </Link>
          <Link href={"#band-section"}>
            <p>Band</p>
          </Link>
          <Link href={"#tour-section"}>
            <p>Tour</p>
          </Link>
          <Link href={"#contact-section"}>
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
}
