import React from "react";
import AboutGeregePassport from "./gerege-passport/page";
import AboutGeregeHistory from "./gerege-history/page";
import AboutHowToUse from "./how-to-use/page";
import AboutDiscounts from "./discounts/page";
import PayemntBasicPage from "@/components/payment/page";
import WeatherAndCurrency from "@/components/weather-and-currency/page";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("aboutUs");
  return (
    <div className="w-full lg:max-w-screen-2xl h-full flex flex-col items-center lg:gap-[100px] gap-[55px] lg:mt-[60px] lg:mb-[30px] relative">
      <AboutGeregePassport />
      <AboutGeregeHistory />
      <AboutHowToUse />
      <AboutDiscounts />
      <div className="w-fit h-fit flex flex-col items-center gap-5">
        <PayemntBasicPage />
        <div className="lg:w-[700px] w-[389px] text-center text-gray-600 font-normal text-base">
          {t("description")}
        </div>
      </div>
    </div>
  );
}
