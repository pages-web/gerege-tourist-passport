import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutHowToUse() {
  const t = useTranslations("AboutHowToUse");
  return (
    <div className="lg:w-[850px] w-[389px] h-fit flex justify-between">
      <div className="lg:w-[480px] w-3/5 lg:h-full h-fit flex flex-col lg:gap-5 gap-3 lg:pl-0 pl-1 justify-between">
        <div>
          <div className="text-[#0087FF] font-bold lg:text-[30px] text-[20px]">
            {t("title")}
          </div>
          <div className="text-gray-800 lg:text-[21px] text-[14px] font-normal">
            {t("subtitle")}
          </div>
        </div>
        <div className="w-full h-fit flex flex-col lg:gap-4 gap-2 justify-between ">
          <div className=" text-gray-800 font-bold lg:text-base text-[15px]">
            {t("freeToursTitle")}
          </div>
          <ul className="list-disc pl-5 flex flex-col gap-[10px]">
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              {t("museums.title")}
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>Chinggis Khaan National Museum</li>
                <li>National Museum of Mongolia</li>
                <li>Choijin Lama Temple Museum</li>
                <li>Bogd Khaan Palace Museum</li>
                <li>The Fine Arts Zanabazar Museum</li>
                <li>The Natural History Museum of Mongolia</li>
              </ul>
            </li>
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              {t("culturalExperiences.title")}
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>{t("culturalExperiences.list.0")}</li>
                <li>{t("culturalExperiences.list.1")}</li>
                <li>{t("culturalExperiences.list.2")}</li>
              </ul>
            </li>
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              {t("exclusiveOffers.title")}
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>{t("exclusiveOffers.list.0")}</li>
                <li>{t("exclusiveOffers.list.1")}</li>
                <li>{t("exclusiveOffers.list.2")}</li>
                <li>{t("exclusiveOffers.list.3")}</li>
                <li>{t("exclusiveOffers.list.4")}</li>
                <li>{t("exclusiveOffers.list.5")}</li>
                <li>{t("exclusiveOffers.list.6")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-[340px] w-2/5 lg:h-[550px] h-[350px]">
        <Image
          alt=""
          width={340}
          height={550}
          src="/image/how-to-use.png"
          className="lg:w-[340px] w-full lg:h-[550px] h-full"
        />
      </div>
    </div>
  );
}
