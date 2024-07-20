import React from "react";
import Image from "next/image";

export default function BuyButton({ width = 220, height = 50 }) {
  return (
    <button
      className={`w-[${width}px] h-[${height}px] border text-center px-[20px] bg-blue-600`}
    >
      <div className="flex justify-between items-center">
        <Image
          alt=""
          src="/image/Store.png"
          width={23}
          height={20}
          className="font-bold"
        />
        <div className="text-white font-bold text-[16px]">
          Gerege Buy for 55$
        </div>
      </div>
    </button>
  );
}
