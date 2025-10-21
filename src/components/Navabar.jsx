import React, { useState, useRef, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

import CompanyLogo from "./CompanyLogo";
import Button from "./Button";
import TopHeader from "./TopHeader";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <TopHeader />

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <CompanyLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 flex-wrap justify-between ml-12">
          <nav className="flex items-center gap-8">
            <NavLink to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">
              Home
            </NavLink>
            <NavLink to="/courses" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">
              Courses
            </NavLink>
            <NavLink to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" icon={<FiPhone size={18} />}>
              Call Us
            </Button>
            <Button variant="primary" icon={<FaLocationArrow size={18} />}>
              Enquire Now
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition active:scale-90"
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </header>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-70 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={drawerRef}
      >
        <div className="flex flex-col p-6 h-full justify-between">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-400">
            <Button variant="ghost" icon={<FiPhone size={18} />}>
              Call Us
            </Button>
            <Button variant="primary" icon={<FaLocationArrow size={18} />}>
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-60"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
