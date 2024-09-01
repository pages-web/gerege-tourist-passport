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
      <div id="gerege-benefit" className="w-full flex flex-col gap-8">
        <div className="h-fit flex flex-col items-center text-center justify-between gap-3">
          <div className="text-black md:text-[30px] text-[20px] font-bold ">
            {t("title")}
          </div>
          <div className="text-[#475467] md:text-[18px] text-[14px] font-normal">
            {t("subtitle")}
          </div>
        </div>

        {/* Start responsive desktop */}
        <div className="w-full lg:flex items-center justify-between gap-10 relative overflow-hidden">
          {/* Start left cards */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col gap-6 lg:gap-y-10">
              <Card
                imageSrc="/image/flag.png"
                title="Culture"
                descriptionKey="CultureDescription"
                link={`/benefits-info`}
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`/benefits-info`}
              />
            </div>

            <div className="flex flex-col gap-6 lg:gap-y-40">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`/benefits-info`}
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`/benefits-info`}
              />
            </div>
          </div>

          {/* End left cards */}

          <div className="flex justify-center items-center lg:mx-20 my-10 lg:my-0">
            <Image
              alt=""
              src="/image/benefit-spin-1.png"
              height={450}
              width={400}
              className="h-fit absolute animate-spin-slow z-10"
            />
            <Image
              alt=""
              src="/image/paiz-1.png"
              width={160}
              height={300}
              className="w-[100px] h-[240px] md:w-[160px] md:h-[320px]"
            />
          </div>

          {/* Start right cards */}

          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col gap-6 lg:gap-40">
              <Card
                imageSrc="/image/hotel-icon.png"
                title="Hotel"
                descriptionKey="HotelDescription"
                link={`/benefits-info`}
              />
              <Card
                imageSrc="/image/restaurant-icon.png"
                title="Restaurant"
                descriptionKey="RestaurantDescription"
                link={`/benefits-info`}
              />
            </div>

            <div className="flex flex-col gap-6 lg:gap-10">
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`/benefits-info`}
              />
              <Card
                imageSrc="/image/museum.png"
                title="Museum"
                descriptionKey="MuseumDescription"
                link={`/benefits-info`}
              />
            </div>
          </div>
          {/* End right cards */}
        </div>
        {/* End responsive desktop */}
      </div>
    </>
  );
}
