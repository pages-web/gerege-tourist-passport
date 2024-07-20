import WeatherAndCurrency from "@/component/weather-and-currency/page";
import React from "react";

export default function HomeComponent() {
  return (
    <div
      className="w-full h-[620px] flex justify-center pt-[300px] relative"
      style={{
        backgroundImage: "url(/image/home-bg.png)",
        backgroundPositionY: "55%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[1200px] h-[278px] rounded-[16px] p-[24px] flex flex-col justify-between bg-black/[.7]">
        <div className="w-[780px] text-[48px] text-white font-bold">
          SAVE UP 49% WITH THE GEREGE PASS
        </div>
        <div className="text-base font-normal text-white">
          Explore all the best London attractions and activities, all for one
          low price.
        </div>
        <button className="w-[127px] h-[43px] rounded-[8px] bg-[#0087FF] text-white text-[16px] font-semibold flex items-center justify-center">
          Buying now
        </button>
      </div>
      {/* <WeatherAndCurrency /> */}
    </div>
  );
}
