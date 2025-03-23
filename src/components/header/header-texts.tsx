"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const HeaderTexts = () => {
  const t = useTranslations("Header").raw;
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <>
      {t("texts").map((item: any, index: number) => (
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
