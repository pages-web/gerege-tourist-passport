"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("Carousel");

  const slides = [
    {
      backgroundImage: "/image/home-bg.png",
      titleKey: "slide1_title",
      descriptionKey: "slide1_description",
    },
    {
      backgroundImage: "/image/about-1.png",
      titleKey: "slide2_title",
      descriptionKey: "slide2_description",
    },
    {
      backgroundImage: "/image/about-1.png",
      titleKey: "slide3_title",
      descriptionKey: "slide3_description",
    },
    {
      backgroundImage: "/image/about-1.png",
      titleKey: "slide4_title",
      descriptionKey: "slide4_description",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 25}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full lg:h-[700px] md:h-[500px] h-[300px] flex justify-center items-end p-2 md:px-32 md:py-10"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundPositionX: "50%",
              backgroundPositionY: "20%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full lg:rounded-[16px] rounded-xl lg:p-[24px] p-3 flex flex-col lg:gap-[25px] gap-5 bg-black/[.7]">
              <div>
                <div className="lg:w-[780px] lg:text-[48px] text-[20px] text-white font-bold">
                  {t(slide.titleKey)}
                </div>
                <div className="lg:text-base text-[12px] font-normal text-white">
                  {t(slide.descriptionKey)}
                </div>
              </div>
              <button className="w-fit px-4 py-2 lg:rounded-[8px] rounded-[5px] bg-[#0087FF] text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center">
                {t("Buying now")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex `lg:space-x-2 space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
