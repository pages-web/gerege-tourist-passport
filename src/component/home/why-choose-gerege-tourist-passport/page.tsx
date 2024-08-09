import React from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslations } from "next-intl";

export default function WhyGeregePassport() {
  const t = useTranslations("WhyChooseGeregeTouristPassport");
  return (
    <div
      id="store-info"
      className="lg:w-full w-[389px] lg:h-[700px] h-[350px] mb-[60px] mt-[60px] relative"
    >
      <Image
        alt=""
        src="/image/logo_color_png 4.png"
        width={600}
        height={320}
        className="lg:w-3/5 lg:h-3/5 absolute z-10 top-[35%] right-[12%]"
      />
      <Image
        alt=""
        src="/image/QR.png"
        width={450}
        height={500}
        className="lg:block hidden lg:w-[450px] w-[300px] lg:h-[570px] h-[300px] absolute z-10 lg:top-[10%] lg:right-[20px]"
      />
      <div className="w-full h-1/2 bg-gray-100 pt-[5%]">
        <div className="lg:w-[730px] w-[300px] lg:h-[170px] h-[120px] lg:ml-[7%] m-auto flex flex-col justify-between">
          <div className="w-full h-[84px] flex flex-col gap-2">
            <div className="lg:text-[28px] text-[15px] text-gray-800 font-bold">
              {t("title")}
            </div>
            <div className="lg:text-[18px] text-[12px] text-gray-600 font-normal">
              {t("description")}
            </div>
          </div>
          <button className="lg:w-[210px] lg:h-[45px] w-[160px] h-[30px] text-white font-normal lg:text-[16px] text-[13px] bg-blue-600 hover:bg-blue-700 hover:scale-105">
            {t("buyButton")}
          </button>
        </div>
      </div>

      <div className="w-full h-1/2 bg-[#034EA2] flex items-center lg:pl-[2%]">
        <div className="lg:w-[760px] w-full lg:h-fit h-fit flex flex-col justify-between lg:gap-4 gap-1">
          <div className="flex items-start justify-center relative">
            <div className="flex flex-col items-center gap-2">
              <div className="lg:w-[50px] w-[35px] lg:h-[50px] h-[35px] rounded-full bg-white flex items-center justify-center">
                <LocalMallIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              </div>
              <div className="lg:w-[200px] w-[125px] lg:h-[100px] h-fit flex flex-col items-center lg:justify-between gap-2">
                <div className="text-white font-bold lg:text-[20px] text-[14px]">
                  {t("buyTitle")}
                </div>
                <div className="w-full h-fit text-gray-200 font-normal lg:text-sm text-[10px] text-center">
                  {t("buyDescription")}
                </div>
              </div>
            </div>
            <hr className="lg:w-[150px] w-[90px] h-[4px] text-white lg:mt-[26px] mt-[18px] absolute z-10 lg:left-[205px] left-[87px]" />
            <div className="flex flex-col items-center gap-2">
              <div className="lg:w-[50px] w-[35px] lg:h-[50px] h-[35px] rounded-full bg-white flex items-center justify-center">
                <PhoneIphoneIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              </div>
              <div className="lg:w-[200px] w-[125px] lg:h-[100px] flex flex-col items-center lg:justify-between gap-2">
                <div className="text-white font-bold lg:text-[20px] text-[14px]">
                  {t("scanTitle")}
                </div>
                <div className="w-full h-fit text-gray-200 font-normal lg:text-sm text-[10px] text-center ">
                  {t("scanDescription")}
                </div>
              </div>
            </div>
            <hr className="lg:w-[150px] w-[90px] h-[4px] text-white lg:mt-[26px] mt-[18px] absolute z-10 lg:right-[205px] right-[87px]" />
            <div className="flex flex-col items-center gap-2">
              <div className="lg:w-[50px] w-[35px] lg:h-[50px] h-[35px] rounded-full bg-white flex items-center justify-center">
                <SaveIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              </div>
              <div className="lg:w-[200px] w-[125px] lg:h-[100px] flex flex-col items-center lg:justify-between gap-2">
                <div className="text-white font-bold lg:text-[20px] text-[14px]">
                  {t("saveTitle")}
                </div>
                <div className="w-full h-fit text-gray-200 font-normal lg:text-sm text-[10px] text-center">
                  {t("saveDescription")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
