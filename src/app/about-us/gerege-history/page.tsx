import React from "react";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

export default function AboutGeregeHistory() {
  return (
    <div className="w-full h-[780px] flex flex-col items-center justify-between">
      <div className="w-[760px] h-fit text-center">
        <div className="text-gray-800 text-[32px] font-bold mb-3">
          GEREGE in History
        </div>
        <div className="w-full h-[80px] text-center text-[16px] leading-6 text-gray-600 font-normal">
          In the 13th century, during the reign of Genghis Khan, the Gerege gold
          badge served as a passport for travelers and royal messengers. Holding
          the badge ensured them unhindered travel and facilitated access to
          goods and services from local communities.
        </div>
      </div>
      <div
        className="w-full h-[600px]"
        style={{
          backgroundImage: "url(image/about-1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "30%",
        }}
      ></div>
    </div>
  );
}
