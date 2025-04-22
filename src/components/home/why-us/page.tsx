"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/heading";
import { Brain, HandHeart, HardHat, PiggyBank, Wallet } from "lucide-react";

export default function WhyUs() {
  const t = useTranslations("aboutUs").raw;

  return (
    <div className="container space-y-10 scroll-mt-40">
      <Heading title={t("title")} data-aos="fade-up" />

      <div className="space-y-6">
        {t("about").map((item: any, index: number) => (
          <div className="space-y-4">
            <h2 className="font-semibold">{item.title}</h2>
            <div
              className="text-[#1D2939] text-[14px] [&>ul]:list-disc [&>ul]:pl-10 "
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {t("benefits").map((benefit: string, index: number) => (
          <div
            key={index}
            className={`p-4 bg-[#D2F3FF] flex flex-col items-center text-center gap-2`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {index === 0 && <HardHat className="text-[#6399CE] h-10 w-10" />}
            {index === 1 && <HandHeart className="text-[#6399CE] h-10 w-10" />}
            {index === 2 && <Brain className="text-[#6399CE] h-10 w-10" />}
            {index === 3 && <Wallet className="text-[#6399CE] h-10 w-10" />}

            <div className="text-[#1D2939] text-[20px] font-bold">
              {benefit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
