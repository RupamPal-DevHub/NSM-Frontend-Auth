import React, { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import nsmLogo from "../../assets/images/image.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const NavbarExchange: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center w-full h-[90px] px-4 sm:px-[5px] md:px-[15px] lg:px-[60px] bg-white border border-[#EAEAEA] absolute">
      <div className="flex items-center gap-2 w-auto h-[50px]">
        <Avatar className="w-[134px] sm:w-[113px] lg:w-[169px] md:w-[155px] h-[50px]">
          <AvatarImage src={nsmLogo} className="object-contain" alt="Logo" />

          <AvatarFallback>NSM</AvatarFallback>
        </Avatar>
      </div>

      {/* Hamburger Button */}
      <button
        className="block sm:hidden text-[#4D625F] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Items */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row items-center p-4  gap-4 lg:gap-[20px] absolute sm:relative top-[90px] sm:top-0 left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent z-50 sm:z-auto shadow-md sm:shadow-none`}
      >
        <span className="font-raleway font-bold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F] hover:text-[#00D1FF] cursor-pointer px-4 py-2 sm:px-0">
          Home
        </span>
        <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F] hover:text-[#00D1FF] cursor-pointer px-4 py-2 sm:px-0">
          Businesses
        </span>
        <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F] hover:text-[#00D1FF] cursor-pointer px-4 py-2 sm:px-0">
          Trade
        </span>
        <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F] hover:text-[#00D1FF] cursor-pointer px-4 py-2 sm:px-0">
          Market
        </span>
        <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F] hover:text-[#00D1FF] cursor-pointer px-4 py-2 sm:px-0">
          Learn
        </span>

        {/* Language Option (Mobile View) */}
        <div className="flex items-center gap-2 px-4 py-2 sm:hidden">
          <Globe className="w-5 h-5 text-[#4D625F]" />
          <span className="font-raleway font-semibold text-[14px] text-[#4D625F]">
            EN
          </span>
          <ChevronDown className="w-5 h-5 text-[#4D625F] cursor-pointer" />
        </div>

        {/* Login Button (Mobile View) */}
        <button className="w-[80px] sm:w-[104px] h-[40px] sm:h-[50px] bg-[#00D1FF] rounded-[10px] flex items-center justify-center sm:hidden">
          <span className="font-raleway font-semibold text-[14px] sm:text-[16px] text-white">
            Login
          </span>
        </button>
      </div>

      {/* Language & CTA Section (Desktop View) */}
      <div className="hidden sm:flex items-center gap-4 lg:gap-[25px]">
        {/* Language Option */}
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#4D625F]" />
          <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-[#4D625F]">
            EN
          </span>
          <ChevronDown className="w-5 h-5 text-[#4D625F] cursor-pointer" />
        </div>

        {/* Login Button */}
        <button
          className="w-[80px] md:w-[90px] lg:w-[104px] h-[40px] sm:h-[45px] md:h-[50px] bg-[#00D1FF] rounded-[10px] flex items-center justify-center"
          onClick={() => navigate("/signinpage")}
        >
          <span className="font-raleway font-semibold text-[14px] md:text-[15px] lg:text-[16px] text-white">
            Login
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NavbarExchange;
