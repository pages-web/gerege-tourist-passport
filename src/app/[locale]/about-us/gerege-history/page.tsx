import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutGeregeHistory() {
  const t = useTranslations("AboutGeregeHistory");
  return (
    <div className="lg:w-full w-[389px] lg:h-[780px] h-[460px] flex flex-col items-center justify-between">
      <div className="lg:w-[760px] w-full h-fit text-center">
        <div className="text-gray-800 lg:text-[32px] text-[20px] font-bold mb-3">
          {t("title")}
        </div>
        <div className="w-full h-[80px] text-center lg:text-[16px] text-[13px] lg:leading-6 leading-5 text-gray-600 font-normal px-1">
          {t("description")}
        </div>
      </div>
      <div className="w-full lg:h-[550px] h-[290px]">
        <Image
          alt=""
          width={1200}
          height={600}
          src="/image/about-1.png"
          className="lg:w-full w-[389px] lg:h-[550px] h-[290px]"
        />
      </div>
    </div>
  );
}
