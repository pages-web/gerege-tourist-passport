"use client";

import CurrentUser from "@/containers/auth/current-user";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

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

const HeaderTexts = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <>
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div
            className={`text-[16px] font-semibold ${
              index === clickedItem ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </>
  );
};
export default HeaderTexts;
