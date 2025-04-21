"use client";

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

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <>
      {t("texts").map((item: any, index: number) => (
        <Link key={index} href={item.href}>
          <div
            className={`text-[16px] font-semibold ${
              pathname === "/"
                ? scrolled
                  ? "text-gray-600"
                  : "text-white"
                : "text-gray-600"
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
