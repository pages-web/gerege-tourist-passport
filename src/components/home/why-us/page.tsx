"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <div id="about" className="space-y-10">
      <div className="flex flex-col items-center lg:gap-3 gap-1">
        <div className="text-[#1D2939] md:text-[30px] text-[20px] font-bold">
          {t("title")}
        </div>
        <div className="text-[#475467] md:text-[18px] text-[14px] font-normal text-center lg:text-left">
          {t("description")}
        </div>
      </div>

      {/* Cards desktop screen */}
      <div className="w-full grid md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`py-6 px-4 bg-[#D2F3FF] flex flex-col items-center justify-center gap-2 ${
              index === 3 ? "px-5" : ""
            }`}
          >
            <Image
              alt=""
              src={`/image/why-us-icon-${item}.png`}
              width={index === 3 ? 46 : 46}
              height={index === 3 ? 46 : 46}
              className={index === 3 ? "mb-5" : ""}
            />
            <div className="text-[#1D2939] text-[16px] font-normal text-center">
              {t(`cards.${index}.description`)}
            </div>
            <div className="text-[#1D2939] text-[16px] font-bold">
              {t(`cards.${index}.title`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
