"use client";
import React, { useState, useEffect, useRef } from "react";
import { useWeather } from "@/provider/WeatherProvider";
import Currency from "./Currency";
import Weather from "./Weather";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const WeatherAndCurrency: React.FC = () => {
  const { weatherNow } = useWeather();
  const weatherRef = useRef<HTMLDivElement | null>(null);
  const currencyRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        weatherRef.current &&
        !weatherRef.current.contains(event.target as Node)
      ) {
        setActiveView(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-fit h-fit flex gap-2 fixed z-50 right-2 md:top-[76%] top-[50%]">
      {activeView === "weather" && (
        <div
          ref={weatherRef}
          className="absolute -top-6 md:right-[65px] right-11 z-40"
        >
          <Weather />
        </div>
      )}
      {activeView === "currency" && (
        <div className="absolute -top-6 md:right-[65px] right-11 z-40">
          <Currency onClose={handleClose} />
        </div>
      )}

      <div className="md:w-[57px] w-fit h-fit flex flex-col gap-2">
        {/* Weather */}
        <div
          onClick={handleWeatherClick}
          className="md:w-[57px] w-10 md:h-[57px] h-10 border md:rounded-2xl rounded-xl border-white bg-black flex flex-col items-center justify-center cursor-pointer"
        >
          <div
            className="md:w-[33px] w-5 md:h-[25px] h-5 bg-contain bg-center bg-no-repeat overflow-hidden"
            style={{
              backgroundImage: `url(${
                weatherNow?.weatherIcon || "/weather-icons/default.png"
              })`,
            }}
          ></div>
          <div className="text-white md:text-base text-[11px] font-bold">
            {weatherNow?.weatherNow}
          </div>
        </div>

        {/* Currency */}
        <div
          onClick={handleCurrencyClick}
          className="md:w-[57px] w-10 md:h-[57px] h-10 border md:rounded-2xl rounded-xl border-[#EAECF0] bg-[#D1FADF] flex flex-col items-center justify-center relative cursor-pointer"
        >
          <div className="w-full h-fit flex items-center justify-center">
            <CurrencyExchangeIcon className="text-gray-800 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAndCurrency;
