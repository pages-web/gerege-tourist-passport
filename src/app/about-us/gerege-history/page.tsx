import React from "react";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

export default function AboutGeregeHistory() {
  return (
    <div className="lg:w-full w-[389px] lg:h-[780px] h-[460px] flex flex-col items-center justify-between">
      <div className="lg:w-[760px] w-full h-fit text-center">
        <div className="text-gray-800 lg:text-[32px] text-[20px] font-bold mb-3">
          GEREGE in History
        </div>
        <div className="w-full h-[80px] text-center lg:text-[16px] text-[13px] lg:leading-6 leading-5 text-gray-600 font-normal px-1">
          In the 13th century, during the reign of Genghis Khan, the Gerege gold
          badge served as a passport for travelers and royal messengers. Holding
          the badge ensured them unhindered travel and facilitated access to
          goods and services from local communities.
        </div>
      </div>
      <div
        className="w-full lg:h-[600px] h-[290px]"
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
