"use client";
import React from "react";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqTab from "./faq-tab";

export default function FAQ() {
  const t = useTranslations("FAQ").raw;

  return (
    <div
      className="lg:px-40 md:px-10 px-0 flex flex-col items-center gap-y-8 md:gap-y-16"
      id="faq"
    >
      <div className="space-y-5">
        <h2 className="text-center uppercase text-[20px] md:text-[30px] text-[#1D2939] font-semibold">
          {t("title")}
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {t("questions").map((item: any, index: number) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent
                asChild
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
