"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PayemntBasicPage from "../payment/page";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Gerege Benefit", href: "/#gerege-benefit" },
  { name: "Store Information", href: "/#store-info" },
  { name: "News And Tips", href: "/#news-and-tips" },
  { name: "FAQ", href: "/#faq" },
];

const searchSuggest = [
  {
    id: 1,
    title: "Chinggis Khaan",
    name: "National Museum",
    href: "/gerege-benefits?category=museum",
  },
  {
    id: 2,
    title: "Chinggis Khaan",
    name: "Air port",
    href: "",
  },
  {
    id: 3,
    title: "Chinggis Khaan",
    name: "Air port",
    href: "",
  },
  {
    id: 4,
    title: "Chinggis Khaan",
    name: "Air port",
    href: "",
  },
];

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN US");
  const [clickedItem, setClickedItem] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="lg:w-full w-[389px] lg:max-w-screen-2xl lg:h-[155px] h-fit mx-auto">
      {/* Start language and search */}
      <div className="w-full lg:h-[55px] h-[40px]  bg-gray-300 flex justify-between items-center lg:px-[40px] px-[10px]">
        <div className="w-fit h-[20px] flex lg:gap-[10px] gap-[5px] items-center">
          <div
            className={`w-fit font-bold lg:text-base text-[10px] flex gap-1 cursor-pointer ${
              selectedLanguage === "EN US" ? "text-blue-600" : ""
            }`}
            onClick={() => handleLanguageClick("EN US")}
          >
            <Image
              alt=""
              src="/image/US.png"
              width={22}
              height={22}
              className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]"
            />
            <div>EN US</div>
          </div>
          <Image
            alt=""
            src="/image/Line-5.png"
            width={1}
            height={20}
            className="lg:h-[20px] h-[15px]"
          />
          <div
            className={`w-fit font-bold lg:text-base text-[10px] flex gap-1 cursor-pointer ${
              selectedLanguage === "KR" ? "text-blue-600" : ""
            }`}
            onClick={() => handleLanguageClick("KR")}
          >
            <Image
              alt=""
              src="/image/KR.png"
              width={22}
              height={22}
              className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]"
            />
            <div>KR</div>
          </div>
        </div>
        <div className="relative">
          <button
            className="lg:w-[267px] w-[130px] lg:h-[35px] h-[20px] flex lg:gap-4 gap-2 items-center lg:pl-[12px] pl-[8px] bg-white"
            onClick={() => setButtonClick(!buttonClick)}
          >
            <SearchIcon className="lg:w-[24px] w-[17px] lg:h-[24px] h-[17px] text-gray-600" />
            <div className="text-gray-600 font-bold lg:text-[15px] text-[11px]">
              Search...
            </div>
          </button>

          {!buttonClick ? (
            ""
          ) : (
            <div className="absolute z-10 right-0 lg:top-11 top-8 lg:w-[440px] w-[250px] h-fit flex flex-col lg:gap-4 gap-2 border bg-white p-3">
              <div className="font-bold text-gray-800 lg:text-[15px] text-[13px] ml-[2px]">
                Suggest results.
              </div>
              {searchSuggest.map((suggest) => (
                <Link
                  href={suggest.href}
                  className="flex justify-between items-center p-1 w-full h-fit border"
                  key={suggest.id}
                  onClick={() => setButtonClick(!buttonClick)}
                >
                  <div className="w-full flex lg:gap-2 gap-1 items-center">
                    <div className="lg:font-bold font-semibold text-gray-800 lg:text-[16px] text-[12px]">
                      {suggest.title}
                    </div>

                    <div className="font-medium text-gray-600 lg:text-[14px] text-[10px]">
                      {suggest.name}
                    </div>
                  </div>
                  <KeyboardArrowRightIcon className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* End language and search */}

      {/* Start menu */}

      <div className="w-full lg:h-[100px] h-[45px] lg:px-[40px] px-[10px] flex justify-between items-center border">
        <Link
          href="/"
          className="logo-text lg:text-[20px] text-[12px] lg:font-semibold text-[#034EA2]"
          onClick={() => setClickedItem(null)}
        >
          GEREGE TOURIST PASSPORT LLC
        </Link>

        <div className="lg:w-[840px] lg:h-[100px] lg:flex lg:justify-between lg:items-center lg:gap-[18px] hidden">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div
                className={`text-[14px] font-semibold ${
                  index === clickedItem ? "text-blue-600" : "text-gray-600"
                }`}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <PayemntBasicPage />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Sidebar navItems={navItems} onClose={toggleMobileMenu} />
        )}
        <button className="lg:hidden text-gray-600" onClick={toggleMobileMenu}>
          <span>
            <MenuIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
