"use client";
import CategoryItem from "@/components/category-item/category-item";
import { listMapAtom } from "@/store";
import { useAtom } from "jotai";
import { List, Map } from "lucide-react";
import { ReactNode } from "react";

const ToggleMapList = () => {
  const [isMap, setisMap] = useAtom(listMapAtom);
  const items = [
    { title: "List", icon: <List className="w-4 h-4 md:w-5 md:h-5" /> },
    { title: "Map", icon: <Map className="w-4 h-4 md:w-5 md:h-5" /> },
  ];

  const Item = ({
    title,
    icon,
    className,
  }: {
    title: string;
    icon: ReactNode;
    className?: ReactNode;
  }) => {
    return (
      <button
        className={`text-nowrap flex items-center gap-x-2 border px-[18px] py-3 cursor-pointer text-[12px] md:text-[16px] font-medium uppercase "text-[#1D2939] bg-white border-[#EAECF0]" ${className}`}
      >
        {title}
        <span>{icon}</span>
      </button>
    );
  };

  return (
    <div className="flex" onClick={() => setisMap(!isMap)}>
      <Item
        title={"List"}
        icon={<List className="w-4 h-4 md:w-5 md:h-5" />}
        className={!isMap && "text-[#0087FF] bg-[#EBFAFF] border-[#AFEAFF]"}
      />
      <Item
        title={"Map"}
        icon={<Map className="w-4 h-4 md:w-5 md:h-5" />}
        className={isMap && "text-[#0087FF] bg-[#EBFAFF] border-[#AFEAFF]"}
      />
    </div>
  );
};
export default ToggleMapList;
