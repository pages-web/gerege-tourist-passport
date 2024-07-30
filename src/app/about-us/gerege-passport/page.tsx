"use client";
import React, { useState } from "react";
import Image from "next/image";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import PayemntBasicPage from "@/component/payment/page";

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
    <div className="w-[1000px] h-[900px] flex flex-col justify-between">
      <div
        className="w-full h-[450px]"
        style={{
          backgroundImage: "url(image/about-1.png)",
          backgroundSize: "cover",
          backgroundPositionY: "30%",
        }}
      ></div>

      <div className="w-full h-[390px] flex justify-between">
        <div className="w-[580px] h-[340px] flex flex-col justify-between">
          <div>
            <div className="text-[#0087FF] font-bold text-[30px]">
              GEREGE TOURIS PASSPORT
            </div>
            <div className="text-[#1D2939] text-[22px] font-medium">
              Must-have item for travel Mongolia
            </div>
          </div>
          <div>
            <div className="text-[#1D2939] text-[20px] font-bold">
              GEREGE Today
            </div>
            <div className="text-[14px] leading-5 text-[#475467]">
              Even today, the spirit of the ancient Gerege lives on through the
              Gerege Passport, offering special privileges and exclusive
              benefits in Mongolia. Own a piece of this historical tradition by
              purchasing your Gerege Passport for just $55 and enjoy its
              modern-day advantages.
            </div>
          </div>
          <div className="w-full h-[100px] flex flex-col justify-between">
            <div>
              <PayemntBasicPage />
            </div>

            <div className="text-[14px] text-[#475467] font-normal">
              $1 from every purchase is donated to support children with special
              needs at the 10th Kindergarten.
            </div>
          </div>
        </div>
        <div className="w-[350px] h-full bg-gray-100 p-3 flex flex-col justify-between relative">
          <div className="w-fit h-fit flex items-center gap-2">
            <div
              onClick={() => handle3DAnd2DClick("3D")}
              className={`text-[18px] font-medium cursor-pointer ${
                selected3DAnd2D === "3D" ? " text-gray-800" : "text-gray-500"
              }`}
            >
              3D
            </div>
            <hr className="w-[1px] h-[20px] bg-black" />

            <div
              onClick={() => handle3DAnd2DClick("2D")}
              className={`text-[18px] font-medium cursor-pointer ${
                selected3DAnd2D === "2D" ? " text-gray-800" : "text-gray-500"
              }`}
            >
              2D
            </div>
          </div>
          <div className="w-[250px] h-full flex flex-col justify-start pt-3 absolute top-0 right-2">
            <div

            // style={{
            //   backgroundImage: `url(${imageList[currentIndex].imgURL})`,
            //   backgroundSize: "contain",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // }}
            >
              <Image
                alt=""
                src={imageList[currentIndex].imgURL}
                width={200}
                height={200}
              />
            </div>
            <div className="w-[80px] flex items-center justify-between absolute right-1 bottom-1">
              <KeyboardArrowLeft
                onClick={handlePreviousClick}
                className="cursor-pointer"
              />
              <div className="text-gray-800 text-base font-normal">
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
