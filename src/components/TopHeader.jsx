import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-2 h-10 bg-gradient-to-b from-[#FF9933] via-[#E67817] to-[#B8560A] text-white text-sm">
      <div className="flex items-center gap-6 font-semibold">
        <div className="flex items-center gap-1 cursor-pointer">
          <IoLocationOutline size={16} />
          <span>
            85-Tirupati Avenue Near by Nakshatra Hotel , Ujjain , Madhya Pradesh
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <IoMailOutline size={16} />
          <span>info@codoholic.com</span>
        </div>
      </div>
      <div className="flex items-center gap-2 font-semibold">
        <span>Follow Us On :</span>
        <a
          href="#"
          className="hover:text-[#1A1A1A] transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={18} />
        </a>
        <a
          href="#"
          className="hover:text-[#1A1A1A] transition-transform transform hover:scale-110"
        >
          <LiaFacebookSquare size={22} />
        </a>
        <a
          href="#"
          className="hover:text-[#1A1A1A] transition-transform transform hover:scale-110"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="#"
          className="hover:text-[#1A1A1A] transition-transform transform hover:scale-110"
        >
          <CiLinkedin size={22} />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
