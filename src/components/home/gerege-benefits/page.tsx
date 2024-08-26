"use client";
import React from "react";
import Image from "next/image";
import Card from "./Card";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const params = useParams();
  const t = useTranslations("Gerege Tour Card Benefits");
  return (
    <>
      <div
        id="gerege-benefit"
        className="lg:w-full w-[389px] lg:h-fit h-fit lg:mb-[60px] mb-[30px] flex flex-col gap-8"
      >
        <div className="h-fit flex flex-col items-center text-center justify-between gap-3">
          <div className="text-black lg:text-[26px] text-[18px] font-bold ">
            {t("title")}
          </div>
          <div className="text-[#475467] lg:text-[18px] text-[14px] font-normal">
            {t("subtitle")}
          </div>
        </div>

        {/* Start responsive desktop */}
        <div className="hidden lg:hidden-block w-full h-fit lg:flex items-center justify-center gap-8 px-[50px]">
          {/* Start left cards */}
          <div className="w-[480px] h-full flex justify-between">
            <div className="w-[225px] h-[520px] flex flex-col justify-between mt-[30px]">
              <Card
                imageSrc="/image/flag.png"
                title="Culture"
                descriptionKey="CultureDescription"
                link={`${params.locale}/gerege-benefits?category=culture`}
                bgImage="/image/culture-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="w-[225px] h-[582px] flex flex-col justify-between">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
            </div>
          </div>

          {/* End left cards */}

          {/* Start center image */}
          <div className="relative">
            <style jsx>{`
              @keyframes spin180 {
                0% {
                  transform: rotate(0deg);
                }
                50% {
                  transform: rotate(180deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }

              .spin-background-wrapper {
                position: relative;
                width: 270px;
                height: 350px;
              }

              .spin-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("/image/benefit-spin-1.png");
                background-position: center;
                background-size: cover;
                animation: spin180 8s linear infinite;
                transform-origin: center;
              }

              .static-content {
                position: relative;
                width: 100%;
                height: 100%;
              }
            `}</style>

            <div className="spin-background-wrapper">
              <div className="spin-background"></div>
              <div className="static-content">
                <Image
                  alt=""
                  src="/image/paiz-1.png"
                  width={160}
                  height={300}
                  className="w-[160px] h-[300px] absolute right-[60px] top-10"
                />
              </div>
            </div>
          </div>
          {/* End center image */}

          {/* Start right cards */}
          <div className="w-[480px] h-full flex justify-between">
            <div className="w-[225px] h-[582px] flex flex-col justify-between">
              <Card
                imageSrc="/image/hotel-icon.png"
                title="Hotel"
                descriptionKey="HotelDescription"
                link={`${params.locale}/gerege-benefits?category=hotel`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/restaurant-icon.png"
                title="Restaurant"
                descriptionKey="RestaurantDescription"
                link={`${params.locale}/gerege-benefits?category=restaurant`}
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="lg:w-[225px] w-[180px] lg:h-[520px] lg-[415px] flex flex-col justify-between lg:mt-[30px]">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
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
                descriptionKey="CultureDescription"
                link={`${params.locale}/gerege-benefits?category=culture`}
                bgImage="/image/culture-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="w-full h-fit flex justify-between">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
            </div>
          </div>
          {/* End top cards */}

          {/* Start center image */}
          <div className="relative mt-10">
            <style jsx>{`
              @keyframes spin180 {
                0% {
                  transform: rotate(0deg);
                }
                50% {
                  transform: rotate(180deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }

              .spin-background-wrapper {
                position: relative;
                width: 270px;
                height: 250px;
              }

              .spin-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("/image/benefit-spin-1.png");
                background-position: center;
                background-size: cover;
                animation: spin180 8s linear infinite;
                transform-origin: center;
              }

              .static-content {
                position: relative;
                width: 100%;
                height: 100%;
              }
            `}</style>

            <div className="spin-background-wrapper">
              <div className="spin-background"></div>
              <div className="static-content">
                <Image
                  alt=""
                  src="/image/paiz-1.png"
                  width={110}
                  height={220}
                  className="w-[110px] h-[220px] absolute right-[85px] top-6"
                />
              </div>
            </div>
          </div>
          {/* End center image */}

          {/* Start bottom cards */}
          <div className="w-[389px] h-fit flex flex-col items-center gap-14">
            <div className="w-full h-fit flex justify-between">
              <Card
                imageSrc="/image/hotel-icon.png"
                title="Hotel"
                descriptionKey="HotelDescription"
                link={`${params.locale}/gerege-benefits?category=hotel`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/restaurant-icon.png"
                title="Restaurant"
                descriptionKey="RestaurantDescription"
                link={`${params.locale}/gerege-benefits?category=restaurant`}
                bgImage="/image/musuem-bg.png"
              />
            </div>

            <div className="w-[370px] h-fit flex gap-3">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
                bgImage="/image/musuem-bg.png"
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`${params.locale}/gerege-benefits?category=museum`}
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
