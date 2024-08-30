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
        <div className="flex flex-col md:flex-row gap-4 text-[15px] opacity-70">
          <p>Home</p>
          <p>Band</p>
          <p>Tour</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}
