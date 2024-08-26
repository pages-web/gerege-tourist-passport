"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function NewsAndTips() {
  const sliderRef = useRef<Slider | null>(null);
  const t = useTranslations("NewsAndTips");
  const cardList = [
    {
      id: 1,
      imageUrl: "/image/321.png",
      title: t("cards.0.title"),
      content: t("cards.0.content"),
    },
    {
      id: 2,
      imageUrl: "/image/321.png",
      title: t("cards.1.title"),
      content: t("cards.1.content"),
    },
    {
      id: 3,
      imageUrl: "/image/321.png",
      title: t("cards.2.title"),
      content: t("cards.2.content"),
    },
    {
      id: 4,
      imageUrl: "/image/321.png",
      title: t("cards.3.title"),
      content: t("cards.3.content"),
    },
    {
      id: 5,
      imageUrl: "/image/321.png",
      title: t("cards.4.title"),
      content: t("cards.4.content"),
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div
      id="news-and-tips"
      className="lg:w-full w-[389px] lg:h-[450px] h-[300px] mb-[80px] flex flex-col justify-between"
    >
      <div className="w-fit h-fit flex flex-col gap-2 items-center justify-between m-auto">
        <div className="text-gray-800 lg:text-[26px] text-[16px] font-bold">
          {t("title")}
        </div>
        <div className="text-gray-600 lg:text-[16px] text-[12px] font-normal">
          {t("description")}
        </div>
      </div>

      <div className="w-full relative">
        <div
          className="lg:w-[32px] w-[26px] lg:h-[32px] h-[26px] border rounded-full flex items-center justify-center cursor-pointer absolute left-[3%] top-[45%]"
          onClick={handlePrevious}
        >
          <KeyboardArrowLeft className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" />
        </div>

        <div className="lg:w-[1220px] w-full lg:mx-auto ml-[15%]">
          <div className="lg:block hidden absolute right-[1%] z-10 w-[400px] h-[310px] bg-gradient-to-r from-white/0 to-white"></div>
          <Slider ref={sliderRef} {...settings}>
            {cardList.map((card) => (
              <div key={card.id}>
                <div className="lg:w-[285px] w-[270px] lg:h-[310px] h-[220px] flex flex-col items-center justify-between">
                  <Image
                    alt={card.title}
                    src={card.imageUrl}
                    width={185}
                    height={185}
                    className="lg:w-[185px] lg:h-[185px] w-[130px] h-[130px]"
                  />
                  <div className="lg:text-[20px] text-[16px] text-gray-800 font-bold">
                    {card.title}
                  </div>
                  <div
                    className="w-full lg:h-[50px] h-[45px] lg:text-xs text-[10px] overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div
          className="lg:w-[32px] w-[26px] lg:h-[32px] h-[26px] border rounded-full flex items-center justify-center cursor-pointer absolute right-[3%] top-[45%] z-20"
          onClick={handleNext}
        >
          <KeyboardArrowRight className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}
