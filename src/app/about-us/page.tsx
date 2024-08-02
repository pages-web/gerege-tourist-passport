import React from "react";
import AboutGeregePassport from "./gerege-passport/page";
import AboutGeregeHistory from "./gerege-history/page";
import AboutHowToUse from "./how-to-use/page";
import AboutDiscounts from "./discounts/page";
import PayemntBasicPage from "@/component/payment/page";

export default function AboutUs() {
  return (
    <div className="w-full lg:max-w-screen-2xl h-full flex flex-col items-center lg:gap-[100px] gap-[55px] lg:mt-[60px] lg:mb-[30px]">
      <AboutGeregePassport />
      <AboutGeregeHistory />
      <AboutHowToUse />
      <AboutDiscounts />
      <div className="w-fit h-fit flex flex-col items-center gap-5">
        <PayemntBasicPage />
        <div className="lg:w-[700px] w-[389px] text-center text-gray-600 font-normal text-base">
          $1 from every purchase is donated to support children with special
          needs at the 10th Kindergarten.
        </div>
      </div>
    </div>
  );
}
