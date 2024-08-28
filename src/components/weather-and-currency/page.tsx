"use client";
import React, { useState } from "react";
import Image from "next/image";
import WeatherCarousel from "./WeatherCarousel";
import CurrencyConverter from "./CurrencyConverter";

const WeatherAndCurrency: React.FC = () => {
  const [activeView, setActiveView] = useState<"weather" | "currency" | null>(
    null
  );

  const handleWeatherClick = () => {
    setActiveView("weather");
  };

  const handleCurrencyClick = () => {
    setActiveView("currency");
  };

  const handleClose = () => {
    setActiveView(null);
  };

  return (
    <div className="w-fit h-fit flex gap-2 sticky z-20 right-4 lg:top-[520px] top-[335px]">
      {activeView === "weather" && (
        <div className="absolute -top-6 right-[65px] z-40">
          <WeatherCarousel />
        </div>
      )}
      {activeView === "currency" && (
        <div className="absolute -top-6 right-[65px] z-40">
          <CurrencyConverter onClose={handleClose} />
        </div>
      )}

      <div className="lg:w-[57px] w-fit h-fit flex flex-col gap-2">
        {/* weather */}
        <div
          onClick={handleWeatherClick}
          className="lg:w-[57px] w-10 lg:h-[57px] h-10 border lg:rounded-2xl rounded-xl border-white bg-black flex flex-col items-center justify-center cursor-pointer"
        >
          <Image
            alt="Weather icon"
            src="/image/PartlyCloudy.png"
            width={33}
            height={25}
            className="lg:w-[33px] w-5 lg:h-[25px] h-5"
          />
          <div className="text-white lg:text-base text-[11px] font-bold">
            +{/* {temperature} */}
            23°C
          </div>
        </div>

        {/* currency */}
        <div
          onClick={handleCurrencyClick}
          className="lg:w-[57px] w-10 lg:h-[57px] h-10 border lg:rounded-2xl rounded-xl border-[#EAECF0] bg-[#D1FADF] flex flex-col items-center justify-center relative cursor-pointer"
        >
          <div className="w-full h-fit flex flex-col">
            <Image
              alt="Dollar icon"
              src="/image/dollar.png"
              width={14}
              height={20}
              className="absolute top-1 left-2 lg:w-[14px] w-2 lg:h-[20px] h-3"
            />

            <Image
              alt="Trend icon"
              src="/image/trend-up-01.png"
              width={28}
              height={32}
              className="absolute top-3 right-2 lg:w-[28px] w-4 lg:h-8 h-4"
            />
          </div>
          <div className="text-gray-800 lg:text-[13px] text-[9px] absolute bottom-0">
            +0.33%
            {/* {currencyRate} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAndCurrency;
