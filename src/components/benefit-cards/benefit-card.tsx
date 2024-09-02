"use client";

import { IArticle } from "@/types/kb.types";
import { useRouter } from "next/navigation";
import Image from "../ui/image";

const BenefitCard = (benefit: IArticle) => {
  const { _id, image, title, summary } = benefit;
  const router = useRouter();
  return (
    <div
      className="w-full p-3 flex md:flex-row flex-col gap-4 md:gap-8 bg-[#FCFCFD] border cursor-pointer hover:scale-105 duration-200"
      onClick={() => router.push(`/info/${_id}`)}
    >
      <div className="p-3 min-w-[200px] min-h-[200px] bg-white flex justify-center items-center border">
        <Image
          src={`${image?.url}` || ""}
          alt=""
          key={image?.url}
          width={300}
          height={300}
          className="h-fit"
          // quality={100}
        />
      </div>
      <div className="space-y-3 md:space-y-6">
        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1D2939]">
          {title}
        </h3>
        <p className="text-[12px] md:text-[16px] text-[#475467]">{summary}</p>
      </div>
    </div>
  );
};
export default BenefitCard;
