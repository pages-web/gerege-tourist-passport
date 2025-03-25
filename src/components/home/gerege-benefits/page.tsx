"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Heading from "@/components/heading/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FaqTab from "../faq/faq-tab";

export default function Benefits() {
  const locale = useLocale();
  const tabs = locale === "kr" ? ["무료", "할인"] : ["Free", "Discount"];
  const params = useParams();
  const t = useTranslations("Gerege Tour Card Benefits").raw;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <div id="gerege-benefit" className="w-full flex flex-col gap-8">
        <Heading title={t("title")} desc={t("subtitle")} data-aos="fade-up" />

        <div className="flex justify-center" data-aos="fade-up">
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

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 content-stretch">
          {(selectedTab === "Free" || selectedTab === "무료") &&
            t("frees").map((parentItem: any, index: number) =>
              parentItem.list.map((item: any, index: number) => (
                <Card
                  imageSrc={
                    parentItem.title === "museums"
                      ? "/image/museum.png"
                      : "/image/flag.png"
                  }
                  title={item.title}
                  description={item.description}
                  link={item.title}
                  parentTitle={parentItem.title}
                  bgImage={item.image}
                  key={index}
                  data-aos="fade-up"
                />
              ))
            )}
          {(selectedTab === "Discount" || selectedTab === "할인") &&
            t("discounts").map((parentItem: any, index: number) =>
              parentItem.list.map((item: any, index: number) => (
                <Card
                  imageSrc={
                    parentItem.title === "restaurants"
                      ? "/image/restaurant-icon.png"
                      : parentItem.title === "hotels" ||
                        parentItem.title === "camps"
                      ? "/image/hotel-icon.png"
                      : "/image/flag.png"
                  }
                  title={item.title}
                  description={item.description}
                  link={item.title}
                  parentTitle={parentItem.title}
                  bgImage={item.image}
                  key={index}
                />
              ))
            )}
        </div>

        {/* <div className="w-full lg:flex items-center justify-between gap-10 relative overflow-hidden">
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


          <div className="flex justify-center items-center lg:mx-20 my-20 lg:my-0">
            <Image
              alt=""
              src="/image/benefit-spin-1.png"
              height={550}
              width={500}
              className="h-fit absolute animate-spin-slow z-10"
            />
            <div className="w-[100px] md:w-[160px] ">
              <Image
                alt=""
                src="/image/paiz-1.png"
                width={160}
                height={300}
                className="w-[100px] md:w-[160px] "
              />
            </div>
          </div>


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
        </div>
        */}
      </div>
    </>
  );
}
