"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Link, usePathname } from "@/navigation";
import { scrolledAtom } from "@/store/framer.store";
import { useAtomValue } from "jotai";
import { useTranslations } from "next-intl";
import { useState } from "react";

const HeaderTexts = () => {
  const t = useTranslations("Header").raw;
  const [clickedItem, setClickedItem] = useState<number | null>(null);
  const [userColor, setUserColor] = useState("#d42a2a"); // initial color like your red
  const scrolled = useAtomValue(scrolledAtom);
  const pathname = usePathname();
  const isLaptop = useMediaQuery("(min-width: 1200px)");

  const handleItemClick = (index: number) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <label
          htmlFor="colorPicker"
          className="text-black font-semibold select-none"
        >
          Choose text color:
        </label>
        <input
          id="colorPicker"
          type="color"
          value={userColor}
          onChange={(e) => setUserColor(e.target.value)}
          className="w-10 h-5 rounded-md cursor-pointer border border-gray-300 shadow-sm transition-transform hover:scale-110"
          title="Pick a color"
        />
      </div>
      <nav className="flex space-x-6">
        {t("texts").map((item: any, index: number) => (
          <Link key={index} href={item.href} className="group">
            <div
              className={`relative cursor-pointer text-[16px] font-semibold transition-colors duration-300
                ${
                  pathname === "/" && isLaptop
                    ? scrolled
                      ? "text-gray-600"
                      : "text-white"
                    : "text-gray-600"
                }
                `}
              style={{ color: userColor }}
              onClick={() => handleItemClick(index)}
            >
              {item.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-current transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderTexts;
