import React from "react";
import AboutGeregePassport from "./gerege-passport/page";
import AboutGeregeHistory from "./gerege-history/page";
import AboutHowToUse from "./how-to-use/page";
import AboutDiscounts from "./discounts/page";
import PayemntBasicPage from "@/component/payment/page";

export default function AboutUs() {
  return (
    <div className="w-full max-w-screen-2xl h-full flex flex-col items-center gap-[100px] mt-[60px] mb-[60px]">
      <AboutGeregePassport />
      <AboutGeregeHistory />
      <AboutHowToUse />
      <AboutDiscounts />
      <div className="w-fit h-fit flex flex-col items-center gap-5">
        <PayemntBasicPage />
        <div className="w-[700px] text-center text-gray-600 font-normal text-base">
          $1 from every purchase is donated to support children with special
          needs at the 10th Kindergarten.
        </div>
      </div>
    </div>
  );
}
