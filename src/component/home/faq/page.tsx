"use client";
import React from "react";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const tabs = [
  "Нийтлэг асуултууд",
  "Бүтээгдэхүүний тухай",
  "Үйлчилгээний тухай",
];

const question = [
  {
    id: 1,
    title: "Би гэрэгэ пасспортоо хэрхэн ашиглах вэ?",
    content:
      "Та Гэрэгэ пасспортын хамтрагч байгууллагуудын онцлогоос хамаарч Гэрэгэ пасспортоо үзүүлэх, Гэрэгэ пасспортын ард хэсгийн QR кодыг уншуулах, зарим шаардлагатай тохиолдолд гэрэгэ пасспорттой дагалдаж ирсэн сим картны утасны дугаарыг бүртгүүлэн үйлчлүүлнэ.",
  },
  {
    id: 2,
    title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 3,
    title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 4,
    title:
      "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 5,
    title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
];

const aboutProduct = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 2,
    title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 3,
    title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 4,
    title:
      "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 5,
    title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
];
const aboutService = [
  {
    id: 1,
    title: "Saepe autem veniam mollitia nobis ullam",
    content:
      "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 2,
    title: "Дата симээ хэрхэн идвэхжүүлэх вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 3,
    title: "Төлбөрийн ямар нөхцөлүүд байгаа вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 4,
    title:
      "Би гэрэгээ пасспортоо ямар нэг шалтгаанаар буцаах хүсэлтэй бол яах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
  {
    id: 5,
    title: "Би буцаалтаа хэр хугацааны дараа авах вэ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem veniam mollitia nobis ullam, facilis eaque quidem dolor, suscipit impedit libero quae magnam, dignissimos dicta aliquid numquam dolorem ducimus ratione.",
  },
];

export default function FAQ() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const getQuestions = () => {
    switch (selectedTab) {
      case "Нийтлэг асуултууд":
        return question;
      case "Бүтээгдэхүүний тухай":
        return aboutProduct;
      case "Үйлчилгээний тухай":
        return aboutService;
      default:
        return [];
    }
  };
  return (
    <div id="faq" className="w-4/5 h-fit mb-[60px] flex flex-col gap-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-gray-800 text-[26px] font-bold">
          Түгээмэл асуулт хариулт
        </div>
        <div className="flex">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`border border-l-0 border-t-0 text-[16px] p-2 cursor-pointer ${
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

      <div className="w-full h-fit border border-gray-100 rounded-xl">
        {getQuestions().map((item) => (
          <div key={item.id} className="w-full h-fit border-b border-gray-100">
            <div
              className="w-full h-fit p-6 flex justify-between items-center cursor-pointer"
              onClick={() => handleQuestionClick(item.id)}
            >
              <div className="text-[16px] text-gray-800">{item.title}</div>
              <ArrowDownwardIcon
                className={`transform transition-transform ${
                  selectedQuestion === item.id ? "rotate-180" : ""
                }`}
              />
            </div>

            {selectedQuestion === item.id && (
              <div className="w-full h-fit p-4 text-gray-800 font-bold text-[13px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
