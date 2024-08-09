"use client";
import React, { useState } from "react";
import Image from "next/image";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import PayemntBasicPage from "@/component/payment/page";
import { useTranslations } from "next-intl";

const imageList = [
  {
    id: 1,
    imgURL: "/image/paiz-3.png",
  },
  {
    id: 2,
    imgURL: "/image/paiz-about-us.png",
  },
  {
    id: 3,
    imgURL: "/image/paiz-2.png",
  },
];

export default function AboutGeregePassport() {
  const [selected3DAnd2D, setSelected3DAnd2D] = useState("2D");
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("AboutGeregePassport");

  const handle3DAnd2DClick = (items: string) => {
    setSelected3DAnd2D(items);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lg:w-[1000px] w-[389px] lg:h-[900px] h-[540px] flex flex-col justify-between">
      <div>
        <Image
          alt=""
          width={1000}
          height={450}
          src="/image/about-1.png"
          className="lg:w-full w-[389px] lg:h-[450px] h-[200px]"
        />
      </div>

      <div className="lg:w-full w-[389px] lg:h-[390px] h-fit flex justify-between">
        <div className="lg:w-[580px] w-[240px] lg:h-[340px] h-[330px] flex flex-col justify-between lg:pl-0 pl-2">
          <div>
            <div className="text-[#0087FF] font-bold lg:text-[30px] text-[16px]">
              {t("title")}
            </div>
            <div className="text-[#1D2939] lg:text-[22px] text-[12px] font-medium">
              {t("subtitle")}
            </div>
          </div>
          <div>
            <div className="text-[#1D2939] lg:text-[20px] text-[14px] font-bold">
              {t("today")}
            </div>
            <div className="lg:text-[14px] text-[11px] leading-5 text-[#475467]">
              {t("description")}
            </div>
          </div>
          <div className="w-full lg:h-[100px] h-[80px] flex flex-col justify-between">
            <div>
              <PayemntBasicPage />
            </div>

            <div className="lg:text-[14px] text-[9px] text-[#475467] font-normal">
              {t("buttonDescription")}
            </div>
          </div>
        </div>
        <div className="lg:w-[350px] w-[145px] lg:h-full h-[250px] bg-gray-100 lg:p-3 p-1 flex flex-col justify-between relative">
          <div className="w-fit h-fit flex items-center gap-2">
            <div
              onClick={() => handle3DAnd2DClick("3D")}
              className={`lg:text-[18px] text-[15px] font-medium cursor-pointer ${
                selected3DAnd2D === "3D" ? " text-gray-800" : "text-gray-500"
              }`}
            >
              3D
            </div>
            <hr className="w-[1px] lg:h-[20px] h-[14px] bg-black" />

            <div
              onClick={() => handle3DAnd2DClick("2D")}
              className={`lg:text-[18px] text-[15px] font-medium cursor-pointer ${
                selected3DAnd2D === "2D" ? " text-gray-800" : "text-gray-500"
              }`}
            >
              2D
            </div>
          </div>
          <div className="lg:w-[250px] w-full lg:h-full h-full flex flex-col lg:justify-start justify-center items-center lg:pt-3 lg:absolute lg:top-0 lg:right-2">
            <div>
              <Image
                alt=""
                src={imageList[currentIndex].imgURL}
                width={200}
                height={200}
                className="lg:w-[200px] w-[120px] lg:h-[250px] h-[160px]"
              />
            </div>
            <div className="w-[80px] flex items-center justify-between lg:absolute lg:right-1 lg:bottom-1">
              <KeyboardArrowLeft
                onClick={handlePreviousClick}
                className="cursor-pointer"
              />
              <div className="text-gray-800 lg:text-base text-[13px] font-normal">
                {currentIndex + 1}-{imageList.length}
              </div>
              <KeyboardArrowRight
                onClick={handleNextClick}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
