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
  const t = useTranslations("FAQ");

  // const getQuestions = () => {
  //   switch (selectedTab) {
  //     case "Нийтлэг асуултууд":
  //       return question;
  //     case "Бүтээгдэхүүний тухай":
  //       return aboutProduct;
  //     case "Үйлчилгээний тухай":
  //       return aboutService;
  //     default:
  //       return [];
  //   }
  // };

  const tabs = [
    t("tabs.common_questions"),
    t("tabs.about_product"),
    t("tabs.about_service"),
  ];

  const question = [
    {
      id: 1,
      title: t("questions.0.title"),
      content: t("questions.0.content"),
    },
    {
      id: 2,
      title: t("questions.1.title"),
      content: t("questions.1.content"),
    },
    {
      id: 3,
      title: t("questions.2.title"),
      content: t("questions.2.content"),
    },
    {
      id: 4,
      title: t("questions.3.title"),
      content: t("questions.3.content"),
    },
    {
      id: 5,
      title: t("questions.4.title"),
      content: t("questions.4.content"),
    },
  ];

  const aboutProduct = [
    {
      id: 1,
      title: t("aboutProduct.0.title"),
      content: t("aboutProduct.0.content"),
    },
    {
      id: 2,
      title: t("aboutProduct.1.title"),
      content: t("aboutProduct.1.content"),
    },
    {
      id: 3,
      title: t("aboutProduct.2.title"),
      content: t("aboutProduct.2.content"),
    },
    {
      id: 4,
      title: t("aboutProduct.3.title"),
      content: t("aboutProduct.3.content"),
    },
    {
      id: 5,
      title: t("aboutProduct.4.title"),
      content: t("aboutProduct.4.content"),
    },
  ];

  const aboutService = [
    {
      id: 1,
      title: t("aboutService.0.title"),
      content: t("aboutService.0.content"),
    },
    {
      id: 2,
      title: t("aboutService.1.title"),
      content: t("aboutService.1.content"),
    },
    {
      id: 3,
      title: t("aboutService.2.title"),
      content: t("aboutService.2.content"),
    },
    {
      id: 4,
      title: t("aboutService.3.title"),
      content: t("aboutService.3.content"),
    },
    {
      id: 5,
      title: t("aboutService.4.title"),
      content: t("aboutService.4.content"),
    },
  ];

  const [isActive, setIsActive] = useState(true);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const getQuestions = () => {
    switch (selectedTab) {
      case t("tabs.common_questions"):
        return question;
      case t("tabs.about_product"):
        return aboutProduct;
      case t("tabs.about_service"):
        return aboutService;
      default:
        return [];
    }
  };
  return (
    <div className="lg:px-40 md:px-10 px-0 flex flex-col items-center gap-y-8 md:gap-y-16">
      <div className="space-y-5">
        <h2 className="text-center uppercase text-[20px] md:text-[30px] text-[#1D2939] font-semibold">
          Түгээмэл асуулт хариулт
        </h2>
        <div className="flex">
          {tabs.map((tab, index) => {
            return (
              <FaqTab
                title={tab}
                key={index}
                isActive={selectedTab === tab}
                onClick={() => setSelectedTab(tab)}
              />
            );
          })}
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {getQuestions().map((item, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
