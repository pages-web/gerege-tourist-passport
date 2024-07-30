import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  bgImage: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  link,
  bgImage,
}) => {
  return (
    <div className="w-[225px] h-[235px] bg-gray-100">
      <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
        <Image alt="" src={imageSrc} width={32} height={32} />
        <div
          className={`text-gray-800 text-[16px] font-semibold 
            ${
              title === "Museum"
                ? "hover:text-blue-500"
                : title === "Hotel"
                ? "hover:text-orange-300"
                : title === "Restaurant"
                ? "hover:text-green-500"
                : title === "Culture"
                ? "hover:text-red-500"
                : "hover:text-gray-800"
            }`}
        >
          {title}
        </div>
        <div
          className="w-[204px] h-[47px] text-xs text-gray-600"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </div>
      </div>
      <Link href={link}>
        <div
          className="w-[225px] h-[52px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPositionY: "50%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-300 font-medium bg-black/[0.5] transition-all duration-700 ease-in-out hover:scale-105 hover:gap-[10px] hover:text-white hover:font-bold">
            ABOUT {title.toUpperCase()}
            <ArrowForwardIosIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
