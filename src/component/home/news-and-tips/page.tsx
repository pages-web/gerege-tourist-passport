"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const cardList = [
  {
    id: 1,
    imageUrl: "/image/321.png",
    title: "Чингис хааны талбай",
    content:
      "“Их Чөлөө” гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсsгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.",
  },
  {
    id: 2,
    imageUrl: "/image/321.png",
    title: "Чингис хааны талбай",
    content:
      "“Их Чөлөө” гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсsгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.",
  },
  {
    id: 3,
    imageUrl: "/image/321.png",
    title: "Чингис хааны талбай",
    content:
      "“Их Чөлөө” гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсsгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.",
  },
  {
    id: 4,
    imageUrl: "/image/321.png",
    title: "Чингис хааны талбай",
    content:
      "“Их Чөлөө” гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсsгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.",
  },
  {
    id: 5,
    imageUrl: "/image/321.png",
    title: "Чингис хааны талбай",
    content:
      "“Их Чөлөө” гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсsгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.",
  },
];

export default function NewsAndTips() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div
      id="news-and-tips"
      className="w-full h-[450px] mb-[60px] flex flex-col justify-between"
    >
      <div className="w-fit h-fit flex flex-col gap-2 items-center justify-between m-auto">
        <div className="text-gray-800 text-[26px] font-bold">NEWS AND TIPS</div>
        <div className="text-gray-600 text-[16px] font-normal">
          Here’s many things you can do in Ulaanbaatar for free and others
        </div>
      </div>
      <div className="w-full relative">
        <div
          className="w-[36px] h-[36px] border rounded-full flex items-center justify-center cursor-pointer absolute left-[3%] top-[45%]"
          onClick={handlePrevious}
        >
          <KeyboardArrowLeft />
        </div>

        <div className="w-full max-w-screen-xl mx-auto">
          <div className="absolute right-[1%] z-10 w-[400px] h-[315px] bg-gradient-to-r from-white/0 to-white"></div>
          <Slider ref={sliderRef} {...settings}>
            {cardList.map((card) => (
              <div key={card.id}>
                <div className="w-[305px] h-[315px] flex flex-col items-center justify-between ">
                  <Image
                    alt={card.title}
                    src={card.imageUrl}
                    width={185}
                    height={185}
                  />
                  <div className="text-[20px] text-gray-800 font-bold">
                    {card.title}
                  </div>
                  <div
                    className="w-full h-[50px] text-xs overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div
          className="w-[36px] h-[36px] border rounded-full flex items-center justify-center cursor-pointer absolute right-[3%] top-[45%] z-20"
          onClick={handleNext}
        >
          <KeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
