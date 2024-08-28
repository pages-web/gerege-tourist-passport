import React, { ReactNode } from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslations } from "next-intl";
import GeregeButton from "@/components/gerege-button/gerege-button";

export default function WhyGeregePassport() {
  const t = useTranslations("WhyChooseGeregeTouristPassport");
  const TitleDesc = ({
    title,
    desc,
    icon,
  }: {
    title: ReactNode;
    desc: ReactNode;
    icon: ReactNode;
  }) => {
    return (
      <div className="max-w-[220px] flex flex-col items-center gap-2">
        <div className="rounded-full bg-white flex items-center justify-center p-3">
          {icon}
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold lg:text-[20px] text-[14px]">
            {title}
          </h4>
          <p className="text-gray-200 font-normal lg:text-sm text-[10px] text-center">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="store-info" className="w-full relative">
      <Image
        alt=""
        src="/image/logo_color_png 4.png"
        width={600}
        height={320}
        className="absolute z-10 top-[35%] md:right-[12%]"
      />
      <Image
        alt=""
        src="/image/QR.png"
        width={450}
        height={500}
        className="lg:block hidden lg:w-[450px] w-[300px] lg:h-[570px] h-[300px] absolute z-10 lg:top-[10%] lg:right-[20px]"
      />
      <div className="w-full bg-gray-100 py-6 md:py-12">
        <div className="container space-y-4 md:space-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="md:text-[28px] text-[20px] text-gray-800 font-bold">
              {t("title")}
            </h3>
            <p className="w-[60%] lg:text-[18px] text-[12px] text-gray-600 font-normal">
              {t("description")}
            </p>
          </div>
          <GeregeButton />
        </div>
      </div>

      <div className="w-full bg-[#034EA2] py-16 md:py-32">
        <div className="container">
          <div className="xl:w-full lg:w-[55%] w-full flex relative gap-x-5 lg:gap-x-10 xl:gap-x-20">
            <TitleDesc
              icon={
                <LocalMallIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              }
              title={t("buyTitle")}
              desc={t("buyDescription")}
            />
            <TitleDesc
              icon={
                <PhoneIphoneIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              }
              title={t("scanTitle")}
              desc={t("scanDescription")}
            />
            <TitleDesc
              icon={
                <SaveIcon className="lg:w-[25px] w-[16px] lg:h-[25px] h-[16px] text-[#859398]" />
              }
              title={t("saveTitle")}
              desc={t("saveDescription")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
