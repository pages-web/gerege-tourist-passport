"use client";
import React from "react";
import Image from "next/image";
import Card from "./Card";

export default function Benefits() {
  return (
    <>
      <div
        id="gerege-benefit"
        className="w-full h-[730px] mb-[60px] flex flex-col justify-between"
      >
        <div className="flex flex-col items-center justify-between gap-3">
          <div className="text-black text-[26px] font-bold ">
            GEREGE TOUR CARD Benefits
          </div>
          <div className="text-[#475467] text-[18px] font-normal">
            Transportation card with discounts for shopping, attractions,
            performances and more
          </div>
        </div>

        <div className="w-full h-[600px] flex items-center justify-center gap-8 px-[50px]">
          {/* Start left cards */}
          <div className="w-[480px] h-full flex justify-between">
            <div className="w-[225px] h-[520px] flex flex-col justify-between mt-[30px]">
              <Card
                imageSrc="/image/flag.png"
                title="Culture"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=culture"
                bgImage="/image/culture-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=museum"
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="w-[225px] h-[582px] flex flex-col justify-between">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=museum"
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=museum"
                bgImage="/image/musuem-bg.png"
              />
            </div>
          </div>

          {/* End left cards */}

          {/* Start center image */}
          <div className="relative">
            <div
              className="w-fit h-fit"
              style={{
                backgroundImage: "url(image/benefit-spin-1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "300px",
                height: "400px",
              }}
            >
              <Image
                alt=""
                src="/image/paiz-1.png"
                width={190}
                height={350}
                className="w-[190px] h-[350px] absolute right-[60px] top-10"
              />
            </div>
          </div>

          {/* End center image */}

          {/* Start right cards */}
          <div className="w-[480px] h-full flex justify-between">
            <div className="w-[225px] h-[582px] flex flex-col justify-between">
              <Card
                imageSrc="/image/hotel-icon.png"
                title="Hotel"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits"
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/restaurant-icon.png"
                title="Restaurant"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits"
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="w-[225px] h-[520px] flex flex-col justify-between mt-[30px]">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=museum"
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                description='"Их Чөлөө" гэдэг нэртэй байсан тус талбайг 1921 оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон байна.'
                link="/gerege-benefits?category=museum"
                bgImage="/image/musuem-bg.png"
              />
            </div>
          </div>
          {/* End right cards */}
        </div>
      </div>
    </>
  );
}
