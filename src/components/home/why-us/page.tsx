"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/heading";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./page.css";

export default function WhyUs() {
  const t = useTranslations("aboutUs").raw;

  return (
    <div className="container space-y-10 scroll-mt-40">
      <Heading title={t("title")} data-aos="fade-up" />

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        data-aos="fade-up"
      >
        {t("about").map((item: any, index: number) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="font-semibold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="text-[#1D2939] text-[14px] [&>*]:list-disc aboutUs"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="w-full grid md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`py-6 px-4 bg-[#D2F3FF] flex flex-col items-center text-center gap-4 ${
              index === 3 ? "px-5" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                alt=""
                src={`/image/why-us-icon-${item}.png`}
                width={index === 3 ? 46 : 46}
                height={index === 3 ? 46 : 46}
                className={"w-full"}
              />
            </div>

            <div
              className="text-[#1D2939] text-[16px] font-bold"
              dangerouslySetInnerHTML={{
                __html: t(`benefits.${index}.title`),
              }}
            ></div>

            <div
              className="text-[#1D2939] text-[16px]"
              dangerouslySetInnerHTML={{
                __html: t(`benefits.${index}.description`),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
