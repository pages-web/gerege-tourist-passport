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
import { useCmsPosts, useCmsTags } from "@/sdk/hooks/cms";
import Heading from "@/components/heading/heading";

export default function FAQ() {
  const t = useTranslations("FAQ").raw;

  const { cmsTags } = useCmsTags();
  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag) => tag.name === "Faq")?._id],
  });

  return (
    <div className="container">
      <Heading title={t("title")} data-aos="fade-up" />

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
