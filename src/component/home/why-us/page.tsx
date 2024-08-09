"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <div
      id="about"
      className="lg:w-[1230px] w-full lg:h-[337px] h-fit mt-[60px] mb-[60px] flex flex-col justify-between"
    >
      <div className="flex flex-col items-center lg:gap-3 gap-1">
        <div className="text-[#1D2939] lg:text-[26px] text-[20px] font-bold">
          {t("title")}
        </div>
        <div className="text-[#475467] lg:text-[16px] text-[13px] font-normal text-center lg:text-left">
          {t("description")}
        </div>
      </div>

      {/* Cards desktop screen */}
      <div className="hidden lg:flex lg:w-full lg:h-[205px] lg:items-center lg:justify-between">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`w-[280px] h-[160px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2 ${
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

      {/* Cards mobile screen */}
      <div className="lg:hidden w-full h-fit flex flex-col gap-[20px] items-center justify-between mt-4">
        <div className="flex flex-wrap gap-[15px] justify-center">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="w-[180px] h-[110px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2 text-center"
            >
              <Image
                alt=""
                src={`/image/why-us-icon-${item}.png`}
                width={item === 4 ? 30 : 30}
                height={item === 4 ? 30 : 30}
                className="mb-2"
              />
              <div className="text-[#1D2939] text-[14px] font-normal">
                {t(`cards.${index}.description`)}
              </div>
              <div className="text-[#1D2939] text-[14px] font-bold">
                {t(`cards.${index}.title`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
