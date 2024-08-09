import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslations } from "next-intl";

interface CardProps {
  imageSrc: string;
  title: string;
  descriptionKey: string;
  link: string;
  bgImage: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  descriptionKey,
  link,
  bgImage,
}) => {
  const t = useTranslations("Gerege Tour Card Benefits");
  return (
    <div className="lg:w-[210px] w-[180px] lg:h-[215px] h-[180px] bg-gray-100">
      <div className="w-full lg:h-[200px] h-[180px] p-[24px] flex flex-col items-center gap-3">
        <Image alt="" src={imageSrc} width={32} height={32} />
        <div
          className={`text-gray-800 text-[16px] font-semibold 
            ${
              title === t("Culture")
                ? "hover:text-blue-500"
                : title === t("Hotel")
                ? "hover:text-orange-300"
                : title === t("Restaurant")
                ? "hover:text-green-500"
                : title === t("Museum")
                ? "hover:text-red-500"
                : "hover:text-gray-800"
            }`}
        >
          {t(title)}
        </div>
        <div
          className="lg:w-[204px] w-[160px] h-[47px] text-xs text-gray-600"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {t(descriptionKey)}
        </div>
      </div>
      <Link href={link}>
        <div
          className="lg:w-[210px] w-[180px] lg:h-[42px] h-[32px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPositionY: "50%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-300 font-medium bg-black/[0.5] transition-all duration-700 ease-in-out hover:scale-105 hover:gap-[10px] hover:text-white hover:font-bold">
            {t("ABOUT")} {t(title).toUpperCase()}
            <ArrowForwardIosIcon className="lg:w-[22px] w-[18px] lg:h-[22px] h-[18px]" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
