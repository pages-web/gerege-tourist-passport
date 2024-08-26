"use client";
import React from "react";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslations } from "next-intl";

// const tabs = [
//   "Нийтлэг асуултууд",
//   "Бүтээгдэхүүний тухай",
//   "Үйлчилгээний тухай",
// ];

// const question = [
//   {
//     id: 1,
//     title: "Би гэрэгэ пасспортоо хэрхэн ашиглах вэ?",
//     content:
//       "Та Гэрэгэ пасспортын хамтрагч байгууллагуудын онцлогоос хамаарч Гэрэгэ пасспортоо үзүүлэх, Гэрэгэ пасспортын ард хэсгийн QR кодыг уншуулах, зарим шаардлагатай тохиолдолд гэрэгэ пасспорттой дагалдаж ирсэн сим картны утасны дугаарыг бүртгүүлэн үйлчлүүлнэ.",
//   },
//   {
//     id: 2,
//     title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 3,
//     title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 4,
//     title:
//       "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 5,
//     title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
// ];

// const aboutProduct = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     content:
//       "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 2,
//     title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 3,
//     title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 4,
//     title:
//       "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 5,
//     title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
// ];
// const aboutService = [
//   {
//     id: 1,
//     title: "Saepe autem veniam mollitia nobis ullam",
//     content:
//       "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 2,
//     title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 3,
//     title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 4,
//     title:
//       "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
//   {
//     id: 5,
//     title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
//   },
// ];

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
    <div
      id="faq"
      className="lg:w-4/5 w-96 h-fit mb-[60px] flex flex-col lg:gap-16 gap-8"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-gray-800 lg:text-[26px] text-[16px] font-bold">
          {t("title")}
        </div>
        <div className="flex">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`border border-l-0 border-t-0 lg:text-[16px] text-[11px] lg:p-2 p-1 text-center cursor-pointer ${
                selectedTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-[#344054]"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-fit border border-gray-100 lg:rounded-xl rounded-[8px]">
        {getQuestions().map((item) => (
          <div key={item.id} className="w-full h-fit border-b border-gray-100">
            <div
              className="w-full h-fit lg:p-6 p-3 flex justify-between lg:items-center cursor-pointer"
              onClick={() => handleQuestionClick(item.id)}
            >
              <div className="lg:text-[16px] text-[13px] text-gray-800">
                {item.title}
              </div>
              <ArrowDownwardIcon
                className={`lg:text-[20px] text-[16px] transform transition-transform ${
                  selectedQuestion === item.id ? "rotate-180" : ""
                }`}
              />
            </div>

            {selectedQuestion === item.id && (
              <div className="w-full h-fit p-4 text-gray-800 font-bold lg:text-[13px] text-[12px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
