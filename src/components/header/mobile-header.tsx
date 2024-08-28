"use client";

import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";
import Link from "next/link";
import { Separator } from "../ui/Separator";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Gerege Benefit", href: "/#gerege-benefit" },
  { name: "Store Information", href: "/#store-info" },
  { name: "News And Tips", href: "/#news-and-tips" },
  { name: "FAQ", href: "/#faq" },
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden"> 
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:w-[540px] bg-white ">
        <SheetTitle>
          <h3 className="w-[80%] logo-text text-[20px] font-semibold text-[#034EA2]">
            GEREGE TOURIST PASSPORT LLC
          </h3>
        </SheetTitle>

        <Separator className="my-3" />

        <div className="flex flex-col items-end gap-3">
          {navItems.map((item, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={item.href}
                  className="text-[20px] font-semibold text-gray-600"
                  type="submit"
                >
                  {item.name}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
