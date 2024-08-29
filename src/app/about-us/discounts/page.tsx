import React from "react";
import Image from "next/image";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function AboutDiscounts() {
  const t = useTranslations("AboutDiscounts");
  //
  return (
    <div className="lg:w-full w-[389px] lg:h-[300px] h-fit bg-gray-50 flex items-center justify-center">
      <div className="lg:w-[800px] w-[389px] lg:h-[250px] h-[220px] flex flex-col items-center lg:justify-between justify-around">
        <div className="text-gray-800 font-bold text-[22px]">{t("title")}</div>
        <div className="w-full lg:h-2/3 flex justify-evenly">
          <div className="lg:w-[180px] w-1/3 lg:h-fit h-[160px] flex flex-col items-center lg:gap-2 justify-between ">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold lg:text-[18px] text-[14px]">
              10%
            </div>
            <div className="text-gray-800 lg:text-[13px] text-[11px] text-center">
              {t("discounts.0.description")}
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              {t("discover")} <KeyboardArrowRight />
            </div>
          </div>
          <div className="lg:w-[180px] w-1/3 lg:h-fit h-[160px] flex flex-col items-center lg:gap-2 justify-between">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold lg:text-[18px] text-[14px]">
              10%
            </div>
            <div className="text-gray-800 lg:text-[13px] text-[11px] text-center">
              {t("discounts.1.description")}
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              {t("discover")} <KeyboardArrowRight />
            </div>
          </div>
          <div className="lg:w-[250px] w-1/3 lg:h-fit h-[160px] flex flex-col items-center lg:gap-2 justify-between">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold lg:text-[18px] text-[14px]">
              10%
            </div>
            <div className="text-gray-800 lg:text-[13px] text-[11px] text-center">
              {t("discounts.2.description")}
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              {t("discover")} <KeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
