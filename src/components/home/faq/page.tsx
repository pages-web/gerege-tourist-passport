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
import { useCmsPosts, useCmsTags } from "@/sdk/hooks/cms";

export default function FAQ() {
  const t = useTranslations("FAQ").raw;

  const { cmsTags } = useCmsTags();
  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag) => tag.name === "Faq")?._id],
  });

  return (
    <div className="container" >
      <div className="space-y-5" data-aos="fade-up">
        <h2 className="text-center uppercase text-[20px] md:text-[30px] text-[#1D2939] font-semibold">
          {t("title")}
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        data-aos="fade-up"
      >
        {cmsPosts.map((post, index) => {
          return (
            <AccordionItem value={post._id} key={index}>
              <AccordionTrigger>{post.title}</AccordionTrigger>
              <AccordionContent>
                <div
                  className="[&>u]:font-bold [&>u]:text-black"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
