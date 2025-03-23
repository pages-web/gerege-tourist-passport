"use client";

import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import Image from "../ui/image";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Separator } from "../ui/Separator";

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

const LanguageAndSearch = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const params = useParams();
  const pathname = usePathname();

  return (
    <div className="w-full py-2 bg-gray-300">
      <div className="container flex justify-between items-center">
        <div className="flex lg:gap-[10px] gap-[5px] items-center">
          <div
            className={`w-fit font-bold lg:text-base text-[10px] flex gap-1 cursor-pointer ${
              pathname === "/en-us" ? "text-blue-600" : "text-black"
            }`}
            onClick={() => pathname}
          >
            <Image
              alt=""
              src="/image/US.png"
              width={22}
              height={22}
              className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]"
            />
            <Link
              href={`/en-us/${pathname.split("/").slice(2).join("/")}`}
              rel="en"
              className="lang active noajax"
            >
              EN US
            </Link>
          </div>
          <Separator
            orientation={"vertical"}
            className="h-[20px] bg-[#475467]"
          />
          <div
            className={`w-fit font-bold lg:text-base text-[10px] flex gap-1 cursor-pointer ${
              pathname === "/kr" ? "text-blue-600" : "text-black"
            }`}
            onClick={() => pathname}
          >
            <Image
              alt=""
              src="/image/KR.png"
              width={22}
              height={22}
              className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]"
            />
            <Link
              href={`/kr/${pathname.split("/").slice(2).join("/")}`}
              rel="kr"
              className="lang noajax"
            >
              KR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageAndSearch;
