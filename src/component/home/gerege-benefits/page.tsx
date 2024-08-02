"use client";
import React from "react";
import Image from "next/image";
import Card from "./Card";

export default function Benefits() {
  return (
    <>
      <div
        id="gerege-benefit"
        className="lg:w-full w-[389px] lg:h-fit h-fit lg:mb-[60px] mb-[30px] flex flex-col gap-8"
      >
        <div className="h-fit flex flex-col items-center text-center justify-between gap-3">
          <div className="text-black lg:text-[26px] text-[18px] font-bold ">
            GEREGE TOUR CARD Benefits
          </div>
          <div className="text-[#475467] lg:text-[18px] text-[14px] font-normal">
            Transportation card with discounts for shopping, attractions,
            performances and more
          </div>
        </div>

        {/* Start responsive desktop */}
        <div className="hidden lg:hidden-block w-full h-[600px] lg:flex items-center justify-center gap-8 px-[50px]">
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
              className="w-[300px] h-[400px]"
              style={{
                backgroundImage: "url(image/benefit-spin-1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                // width: "300px",
                // height: "400px",
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

            <div className="lg:w-[225px] w-[180px] lg:h-[520px] lg-[415px] flex flex-col justify-between lg:mt-[30px]">
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
        {/* End responsive desktop */}

        {/* Start responsive mobile */}
        <div className="lg:hidden w-[389px] h-fit flex flex-col items-center justify-center">
          {/* Start top cards */}
          <div className="w-[389px] h-fit flex flex-col items-center gap-14">
            <div className="w-[370px] h-fit flex justify-between">
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

            <div className="w-full h-fit flex justify-between">
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
          {/* End top cards */}

          {/* Start center image */}
          <div className="relative mt-10">
            <div
              className="w-[270px] h-[250px]"
              style={{
                backgroundImage: "url(image/benefit-spin-1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                // width: "300px",
                // height: "400px",
              }}
            >
              <Image
                alt=""
                src="/image/paiz-1.png"
                width={110}
                height={220}
                className="w-[110px] h-[220px] absolute right-[85px] top-6"
              />
            </div>
          </div>
          {/* End center image */}

          {/* Start bottom cards */}
          <div className="w-[389px] h-fit flex flex-col items-center gap-14">
            <div className="w-full h-fit flex justify-between">
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

            <div className="w-[370px] h-fit flex gap-3">
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
        {/* End responsive mobile */}
      </div>
    </>
  );
}
