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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
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
      className="w-full overflow-hidden flex flex-col justify-between gap-14"
    >
      <div className="flex flex-col gap-2 items-center justify-between m-auto">
        <div className="text-gray-800 md:text-[30px] text-[20px] font-bold">
          {t("title")}
        </div>
        <div className="text-gray-600 md:text-[18px] text-[14px] font-normal">
          {t("description")}
        </div>
      </div>

      <div className="w-full relative">
        <button
          className="bg-white p-1 border rounded-full flex items-center justify-center absolute left-0 top-[45%] z-40"
          onClick={handlePrevious}
        >
          <KeyboardArrowLeft className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" />
        </button>

        <div className="lg:block hidden absolute right-0 z-10 w-[400px] h-[310px] bg-gradient-to-r from-white/0 to-white"></div>
        <div className="lg:block hidden absolute left-0 z-10 w-[400px] h-[310px] bg-gradient-to-l from-white/0 to-white"></div>

        <Slider ref={sliderRef} {...settings} className="mx-[5%]">
          {cardList.map((card) => (
            <div
              className="flex space-y-4 max-w-[200px] lg:max-w-[250px] text-center xl:ml-10 max-[320px]:ml-8"
              key={card.id}
            >
              <div className="flex justify-center">
                <Image
                  alt={card.title}
                  src={card.imageUrl}
                  width={185}
                  height={185}
                  className="lg:w-[185px] lg:h-[185px] w-[130px] h-[130px]"
                />
              </div>
              <h3 className="lg:text-[20px] text-[16px] text-gray-800 font-bold xl:mx-0 mx-3">
                {card.title}
              </h3>
              <p className="lg:text-xs text-[10px] overflow-hidden line-clamp-3 xl:mx-0 mx-6">
                {card.content}
              </p>
            </div>
          ))}
        </Slider>

        <button
          className="bg-white p-1 border rounded-full flex items-center justify-center absolute right-0 top-[45%] z-40"
          onClick={handleNext}
        >
          <KeyboardArrowRight className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" />
        </button>
      </div>
    </div>
  );
}
