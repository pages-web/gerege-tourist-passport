import React from "react";
import Image from "next/image";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function AboutDiscounts() {
  return (
    <div className="w-full h-[300px] bg-gray-50 flex items-center justify-center">
      <div className="w-[800px] h-[250px] flex flex-col items-center justify-between ">
        <div className="text-gray-800 font-bold text-[22px]">
          Exclusive Discounts
        </div>
        <div className="w-full h-2/3 flex justify-evenly">
          <div className="w-[180px] h-fit flex flex-col items-center gap-2 ">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold text-[18px]">10%</div>
            <div className="text-gray-800 text-[13px] text-center">
               &quot;Modern Nomads&quot; Mongolian chain restaurants
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              Discover <KeyboardArrowRight />
            </div>
          </div>
          <div className="w-[180px] h-fit flex flex-col items-center gap-2 ">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold text-[18px]">10%</div>
            <div className="text-gray-800 text-[13px] text-center">
              &quot;Yuna&quot; Korean chain restaurants
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              Discover <KeyboardArrowRight />
            </div>
          </div>
          <div className="w-[250px] h-fit flex flex-col items-center gap-2 ">
            <Image alt="" src="/image/discount.png" width={40} height={40} />
            <div className="text-[#0087FF] font-bold text-[18px]">10%</div>
            <div className="text-gray-800 text-[13px] text-center">
              &quot;Evseg Mongolian Premium Cashmere&quot; stores
            </div>
            <div className="flex gap-1 items-center text-gray-600 text-[13px] cursor-pointer">
              Discover <KeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
