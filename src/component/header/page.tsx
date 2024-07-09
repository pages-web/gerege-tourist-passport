"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Gerege Benefit", href: "#benefit" },
  { name: "Store Information", href: "#store-info" },
  { name: "News And Tips", href: "#news-and-tips" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN US");
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="w-full h-[155px] border">
      <div className="w-full h-[55px] bg-gray-300 flex justify-between items-center px-[80px]">
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
        <div className="w-[267px] h-[35px] flex items-center justify-between pl-[12px] bg-white">
          <SearchIcon className="w-[24px] h-[24px] text-gray-600" />
          <Input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="w-full h-[100px] px-[80px] flex justify-between items-center border">
        <Link
          href="/"
          className="logo-text text-[20px] font-semibold text-[#034EA2]"
        >
          GEREGE TOURIST PASSPORT LLC
        </Link>
        <div className="w-[850px] h-[100px] flex justify-between items-center gap-[20px]">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div
                className={`text-[14px] font-semibold ${
                  index === clickedItem ? "text-[#034EA2]" : "text-gray-600"
                }`}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <button className="w-[240px] h-[50px] border text-center px-[20px] bg-blue-600">
            <div className="flex justify-between items-center">
              <Image
                alt=""
                src="/image/Store.png"
                width={23}
                height={20}
                className="font-bold"
              />
              <div className="text-white font-bold text-[16px]">
                Gerege Buy for 55$
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
