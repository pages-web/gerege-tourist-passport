"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import BuyButton from "../buy-button/page";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Gerege Benefit", href: "/gerege-benefits" },
  { name: "Store Information", href: "#store-info" },
  { name: "News And Tips", href: "#news-and-tips" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN US");
  const [clickedItem, setClickedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement your search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="w-full h-[155px] border">
      <div className="w-full h-[55px] bg-gray-300 flex justify-between items-center px-[70px]">
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
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearchSubmit();
              }
            }}
          />
        </div>
      </div>
      <div className="w-full h-[100px] px-[70px] flex justify-between items-center">
        <Link
          href="/"
          className="logo-text text-[20px] font-semibold text-[#034EA2]"
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
          <BuyButton />
        </div>
      </div>
    </div>
  );
}
