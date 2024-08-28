"use client";

import { IArticle } from "@/types/kb.types";
import Image from "../ui/image";
import { useRouter } from "next/navigation";

const BenefitCard = (benefit: IArticle) => {
  const { _id, image, title, summary } = benefit;
  const router = useRouter();
  return (
    <div
      className="w-full p-3 flex gap-x-8 bg-[#FCFCFD] border cursor-pointer hover:scale-105 duration-200"
      onClick={() => router.push(`/info/${_id}`)}
    >
      <div className="min-w-[194px] min-h-[194px] bg-white flex justify-center items-center border">
        <Image src={image?.url || ""} width={300} height={300} quality={100} />
      </div>
      <div className="space-y-6">
        <h3 className="text-[24px] font-semibold text-[#1D2939]">{title}</h3>
        <p className="text-[16px] text-[#475467]">{summary}</p>
      </div>
    </div>
  );
};
export default BenefitCard;
