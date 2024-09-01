import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
  descriptionKey: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  descriptionKey,
  link,
}) => {
  const variant = [
    {
      hover: {
        color: "white",
        x: -5,
        transition: {
          duration: 0.3,
        },
      },
    },
    {
      hover: {
        color: "white",
        x: 5,
        transition: {
          duration: 0.3,
        },
      },
    },
  ];
  const t = useTranslations("Gerege Tour Card Benefits");
  return (
    <motion.div
      className="max-w-[220px] bg-gray-100 group z-20"
      whileHover="hover"
    >
      <Link href={link}>
        <div className="w-full p-3 md:p-6 flex flex-col items-center gap-3">
          <Image alt="" src={imageSrc} width={32} height={32} />
          <div
            className={`text-gray-800 text-[16px] font-semibold uppercase duration-200
            ${
              title === t("Culture")
                ? "group-hover:text-blue-500"
                : title === t("Hotel")
                ? "group-hover:text-orange-300"
                : title === t("Restaurant")
                ? "group-hover:text-green-500"
                : title === t("Museum")
                ? "group-hover:text-red-500"
                : "group-hover:text-gray-800"
            }`}
          >
            {t(title)}
          </div>
          <div
            className="text-justify text-xs text-gray-600"
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
        <div
          className="flex items-center justify-center"
          style={{
            backgroundImage: `url(/image/culture-bg.jpg)`,
            backgroundPositionY: "50%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full p-4 flex items-center justify-center text-[12px] text-white/60 bg-black/[0.5]">
            <motion.span variants={variant[0]}>
              {t("ABOUT")} {t(title).toUpperCase()}
            </motion.span>
            <motion.span variants={variant[1]}>
              <ArrowForwardIosIcon className="lg:w-[22px] w-[18px] lg:h-[22px] h-[18px]" />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
