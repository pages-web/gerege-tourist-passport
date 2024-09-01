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
          <Separator orientation={"vertical"} className="h-[20px] bg-[#475467]"/>
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
                {/* {t("suggestResult")} */}
              </div>
              {searchSuggest.map((suggest) => (
                <Link
                  href={`${params.locale}${suggest.href}`}
                  className="flex justify-between items-center p-1 w-full h-fit border"
                  key={suggest.id}
                  onClick={() => setButtonClick(!buttonClick)}
                >
                  <div className="w-full flex lg:gap-2 gap-1 items-center">
                    <div className="lg:font-bold font-semibold text-gray-800 lg:text-[16px] text-[12px]">
                      {/* {suggest.title} */}
                    </div>

                    <div className="font-medium text-gray-600 lg:text-[14px] text-[10px]">
                      {/* {t(suggest.name)} */}
                    </div>
                  </div>
                  <KeyboardArrowRightIcon className="lg:w-[22px] w-[14px] lg:h-[22px] h-[14px]" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageAndSearch;
