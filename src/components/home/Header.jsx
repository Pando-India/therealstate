import { useState } from "react";
import logo from "../../assets/images/header/logo.svg";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sticky w-full bg-white lg:py-5 md:py-3 md:shadow-none shadow z-50">
        <div className="2xl:w-[1280px] lg:w-full md:w-[800px] md:px-1 xl:px-10 p-2 mx-auto flex items-center justify-between font-medium">
          {/* Logo */}
          <div className="md:w-38">
            <NavLink className="h-2 lg:w-38 md:h-16" to="/">
              <img src={logo} alt="logo" className="h-12 md:h-16" />
            </NavLink>
          </div>

          {/* Earn Money Button - Centered on mobile */}
          <div className="md:hidden flex-grow flex justify-center">
            <button className="bg-[#059C9C] text-white text-sm flex items-center gap-1 px-4 py-2 rounded-full">
              <FaWhatsapp />
              Chat with Us
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:gap-7 lg:ml-28 lg:text-lg md:text-sm md:gap-4">
            <NavLink to="/" className="hover:text-[#1EB83A]">
              Home
            </NavLink>
            <NavLink to="/" className="hover:text-[#1EB83A]">
              About Us
            </NavLink>
            <NavLink to="/properties-overview" className="hover:text-[#1EB83A]">
              Amenities
            </NavLink>
            <NavLink to="/" className="hover:text-[#1EB83A]">
              Floor Plans
            </NavLink>
            <NavLink to="/" className="hover:text-[#1EB83A]">
              Gallery
            </NavLink>
            <NavLink to="/" className="hover:text-[#1EB83A]">
              Contact Us
            </NavLink>
          </div>

          {/* Login and Earn Money button on Desktop */}
          <div className="hidden md:flex items-center gap-4 md:text-sm lg:text-lg">
            <span className="hidden md:block text-sm text-[#605F5F] cursor-pointer">
              Log In
            </span>
            <button className="bg-[#1EB83A] text-white text-sm flex items-center md:gap-1 px-2 rounded-full lg:px-5 md:px-2 md:py-2 md:text-lg">
              <FaWhatsapp />
              Chat with Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="text-4xl font-bold md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <CgClose /> : <CgMenuRightAlt />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white text-center text-lg shadow-lg border py-3">
            <NavLink
              to="/"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Amenities
            </NavLink>
            <NavLink
              to="/"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
            <span className="">Log In</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
