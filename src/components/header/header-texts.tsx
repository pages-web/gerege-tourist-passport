"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Link, usePathname } from "@/navigation";
import { scrolledAtom } from "@/store/framer.store";
import { useAtomValue } from "jotai";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const HeaderTexts = () => {
  const t = useTranslations("Header").raw;
  const [clickedItem, setClickedItem] = useState(null);
  const scrolled = useAtomValue(scrolledAtom);
  const pathname = usePathname();
  const isLaptop = useMediaQuery("(min-width: 1200px)");

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <>
      {t("texts").map((item: any, index: number) => (
        <Link key={index} href={item.href}>
          <div
            className={`relative cursor-pointer text-[18px] font-semibold transition-colors duration-200
            text-black
            after:absolute after:right-0 after:bottom-0 after:h-[3px] after:w-0
            after:bg-gray-700 after:transition-all after:duration-300
            hover:after:left-0 hover:after:w-full hover:text-gray-700
          `}
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
