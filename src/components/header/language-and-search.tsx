"use client";

import { useState } from "react";
import Image from "../ui/image";
import { SearchIcon } from "lucide-react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Separator } from "../ui/Separator";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

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

const locales = [
  { code: "en-us", label: "EN US", flag: "/image/US.png" },
  { code: "kr", label: "KR", flag: "/image/KR.png" },
];

const LanguageAndSearch = () => {
  const pathname = usePathname(); // Get current pathname
  const router = useRouter(); // Next-intl router
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return; // Prevent unnecessary reloads
    router.push(pathname, { locale: newLocale }); // Change locale without losing path
  };

  return (
    <div className="w-full py-2 bg-gray-300">
      <div className="container flex justify-between items-center">
        <div className="flex lg:gap-[10px] gap-[5px] items-center">
          {locales.map(({ code, label, flag }, index) => (
            <>
              <button
                key={code}
                className={`w-fit font-bold lg:text-base text-[10px] flex gap-1 cursor-pointer ${
                  locale === code ? "text-[#6399CE]" : "text-black"
                }`}
                onClick={() => switchLocale(code)}
              >
                <Image
                  alt={label}
                  src={flag}
                  width={22}
                  height={22}
                  className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]"
                />
                {label}
              </button>
              {index === 0 && (
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#475467]"
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageAndSearch;
