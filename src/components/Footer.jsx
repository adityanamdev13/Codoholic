import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import CompanyLogo from "./CompanyLogo";
import { LuCheckCheck } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#1A1A1A] text-gray-200 px-6 md:px-12 md:pl-6 pt-14 pb-8">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ==== Company Info ==== */}
        <div>
          <CompanyLogo logo="white" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-80 md:ml-4">
            Empowering students to achieve their fullest potential with focused
            and practical education.
          </p>
          <div className="flex space-x-4 mt-5 md:ml-4">
            {[FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* ==== Quick Links ==== */}
        <div className="md:pl-12">
          <h3 className="text-white font-semibold text-xl pb-1">Quick Links</h3>
          <div className="h-1 bg-[#E67817] w-8 rounded-r-full mb-3"></div>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "Courses", "About Us", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative inline-block transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div>
          <h3 className="text-white font-semibold text-xl pb-1">
            Contact Info
          </h3>
          <div className="h-1 bg-[#E67817] w-8 rounded-r-full mb-3"></div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-3 cursor-pointer">
              <FaMapMarkerAlt className="text-[#E67817] mt-1 flex-shrink-0" />
              <span>
                85-Tirupati Avenue Near by Nakshatra Hotel, Ujjain, Madhya
                Pradesh
              </span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <FaPhoneAlt className="text-[#E67817] flex-shrink-0" />
              <span>+91 8120544147</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <FaEnvelope className="text-[#E67817] flex-shrink-0" />
              <span>info@codoholic.com</span>
            </li>
          </ul>
        </div>

        {/* ==== Newsletter ==== */}
        <div>
          <h3 className="text-white font-semibold text-xl pb-1">
            Subscribe to our Newsletter
          </h3>
          <div className="h-1 bg-[#E67817] w-8 rounded-r-full mb-3"></div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Get the latest courses and updates straight to your inbox.
          </p>
          <form className="flex flex-row gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-1 pl-2 py-2 rounded-md text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      {/* ====== Divider ====== */}
      <div className="mt-10 border-t border-gray-700" />
      <div className="md:flex items-center mt-4  justify-between">
        {/* ====== Terms & Policy Section ====== */}
        <div className="text-center  space-x-4 md:text-sm text-gray-400 mb-2 md:md-0 ">
          <NavLink
          onClick={scrollToTop}
            to="/terms-of-use"
            className="relative inline-block transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Terms of use
          </NavLink>
          <span>|</span>
          <NavLink
          onClick={scrollToTop}
            to="/privacy-policy"
            className="relative inline-block transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Privacy Policy
          </NavLink>
        </div>

        {/* ====== Bottom Bar ====== */}
        <div className="text-center text-gray-500 text-sm ">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            <span className="text-[#E67817]">Co</span>doh
            <span className="relative">
              <LuCheckCheck
                strokeWidth={2}
                size={8}
                color="#2F80ED"
                className="absolute top-0 left-0"
              />
              o
            </span>
            lic
          </span>{" "}
          — All rights reserved.
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
