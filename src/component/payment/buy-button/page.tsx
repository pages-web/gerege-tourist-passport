// BuyButton.tsx
import React from "react";
import Image from "next/image";

interface BuyButtonProps {
  onClick: () => void;
  width?: number;
  height?: number;
  bgColor?: string;
  text?: string;
  icon?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({
  onClick,
  width = 220,
  height = 50,
  bgColor = "bg-blue-600",
  text = "",
  icon = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[${width}px] h-[${height}px] border text-center px-[20px] ${bgColor}`}
    >
      <div className="flex gap-2 items-center">
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
};

export default BuyButton;
