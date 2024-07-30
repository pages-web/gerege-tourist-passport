"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PayemntBasicPage from "../payment/page";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("EN US");
  const [clickedItem, setClickedItem] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="w-full max-w-screen-2xl h-[155px]">
      <div className="w-full h-[55px]  bg-gray-300 flex justify-between items-center px-[70px]">
        <div className="w-[144px] h-[20px] flex justify-between items-center">
          <div
            className={`w-[73px] font-extrabold text-base flex justify-between cursor-pointer ${
              selectedLanguage === "EN US" ? "text-blue-600" : ""
            }`}
            onClick={() => handleLanguageClick("EN US")}
          >
            <Image alt="" src="/image/US.png" width={22} height={22} />
            <div>EN US</div>
          </div>
          <Image alt="" src="/image/Line-5.png" width={1} height={20} />
          <div
            className={`w-[47px] font-extrabold text-base flex justify-between cursor-pointer ${
              selectedLanguage === "KR" ? "text-blue-600" : ""
            }`}
            onClick={() => handleLanguageClick("KR")}
          >
            <Image alt="" src="/image/KR.png" width={22} height={22} />
            <div>KR</div>
          </div>
        </div>
        <div className="relative">
          <button
            className="w-[267px] h-[35px] flex gap-4 items-center pl-[12px] bg-white"
            onClick={() => setButtonClick(!buttonClick)}
          >
            <SearchIcon className="w-[24px] h-[24px] text-gray-600" />
            <div className="text-gray-600 font-bold text-[15px]">Search...</div>
          </button>

          {!buttonClick ? (
            ""
          ) : (
            <div className="absolute z-10 right-0 top-11 w-[440px] h-fit flex flex-col gap-4 border bg-white p-3">
              <div className="font-bold text-gray-800 text-[15px] ml-[2px]">
                Suggest results.
              </div>
              {searchSuggest.map((suggest) => (
                <Link
                  href={suggest.href}
                  className="flex justify-between p-1 w-full h-fit border"
                  key={suggest.id}
                  onClick={() => setButtonClick(!buttonClick)}
                >
                  <div className="flex gap-2 items-center">
                    <div className="font-bold text-gray-800 text-[16px]">
                      {suggest.title}
                    </div>

                    <div className="font-medium text-gray-600 text-[14px]">
                      {suggest.name}
                    </div>
                  </div>
                  <KeyboardArrowRightIcon />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[100px] px-[70px] flex justify-between items-center">
        <Link
          href="/"
          className="logo-text text-[20px] font-semibold text-[#034EA2]"
          onClick={() => setClickedItem(null)}
        >
          GEREGE TOURIST PASSPORT LLC
        </Link>
        <div className="w-[840px] h-[100px] flex justify-between items-center gap-[18px]">
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
      </div>
    </div>
  );
}
