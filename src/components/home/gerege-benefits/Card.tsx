import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  parentTitle: string;
  bgImage: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  link,
  parentTitle,
  bgImage,
  ...props
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
  const locale = useLocale();
  return (
    <motion.div
      className="bg-gray-100 group z-20"
      whileHover="hover"
      {...props}
    >
      <Link href={`/benefits/${encodeURIComponent(link)}`} className="h-full">
        <div className="w-full p-3 md:p-6 flex flex-col items-center gap-3">
          <Image alt="" src={imageSrc} width={32} height={32} />
          <div
            className={`text-gray-800 text-[16px] font-semibold uppercase duration-200 line-clamp-1
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
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            className="text-justify text-xs text-gray-600"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage || "/image/culture-bg.jpg"})`,
            backgroundPositionY: "50%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full p-4 flex items-center justify-center text-[12px] text-white/60 bg-black/[0.5]">
            <motion.span variants={variant[0]} className="line-clamp-1">
              {t("ABOUT")} {title.toUpperCase()}
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
