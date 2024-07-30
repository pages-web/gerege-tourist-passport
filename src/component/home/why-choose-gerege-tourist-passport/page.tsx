import React from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SaveIcon from "@mui/icons-material/Save";

export default function WhyGeregePassport() {
  return (
    <div
      id="store-info"
      className="w-full h-[700px] mb-[60px] mt-[60px] relative"
    >
      <Image
        alt=""
        src="/image/logo_color_png 4.png"
        width={600}
        height={320}
        className="w-3/5 h-3/5 absolute z-10 top-[35%] right-[12%]"
      />
      <Image
        alt=""
        src="/image/QR.png"
        width={450}
        height={450}
        className="w-[500px] h-[600px] absolute z-10 top-[10%] right-[30px]"
      />
      <div className="w-full h-1/2 bg-gray-100 pt-[5%]">
        <div className="w-[730px] h-[170px] ml-[7%] flex flex-col justify-between">
          <div className="w-full h-[84px] flex flex-col gap-2">
            <div className="text-[28px] text-gray-800 font-bold">
              Why Choose Gerege Tours Passport
            </div>
            <div className="text-[18px] text-gray-600 font-normal">
              Transportation card with discounts for shopping, attractions,
              performances and more
            </div>
          </div>
          <button className="w-[210px] h-[45px] text-white font-normal text-[16px] bg-blue-600 hover:bg-blue-700 hover:scale-105">
            Buy now for 55$
          </button>
        </div>
      </div>
      <div className="w-full h-1/2 bg-[#034EA2] flex items-center pl-[7%]">
        <div className="w-[760px] h-fit flex flex-col justify-between gap-4">
          <div className="flex items-center justify-center">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
              <LocalMallIcon className="w-[25px] h-[25px] text-[#859398]" />
            </div>
            <hr className="w-[230px] h-[4px] text-white" />
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
              <PhoneIphoneIcon className="w-[25px] h-[25px] text-[#859398]" />
            </div>
            <hr className="w-[230px] h-[4px] text-white" />
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
              <SaveIcon className="w-[25px] h-[30px] text-[#859398]" />
            </div>
          </div>
          {/* <div></div> */}
          <div className="w-full h-fit flex items-center justify-between">
            <div className="w-[200px] h-[100px] flex flex-col items-center justify-between ">
              <div className="text-white font-bold text-[20px]">Buy</div>
              <div className="w-full h-fit text-gray-200 font-normal text-sm text-center">
                Pick a 1, 2, 3, 4, 5, 6, 7 or 10-day credits package, whichever
                works for your trip.
              </div>
            </div>
            <div className="w-[200px] h-[100px] flex flex-col items-center justify-between">
              <div className="text-white font-bold text-[20px]">Scan</div>
              <div className="w-full h-fit text-gray-200 font-normal text-sm text-center ">
                Download our highly-rated app to scan in at each attraction.
              </div>
            </div>
            <div className="w-[200px] h-[100px] flex flex-col items-center justify-between">
              <div className="text-white font-bold text-[20px]">Save</div>
              <div className="w-full h-fit text-gray-200 font-normal text-sm text-center">
                Enjoy guaranteed savings (or we&apos;ll refund you the
                difference!) That&apos;s our guarantee!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
