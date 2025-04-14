"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Heading from "@/components/heading/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FaqTab from "../faq/faq-tab";
import CategoryCard from "./category-card";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { ICmsCategory } from "@/types/cms.types";
import { useCmsCategories, useCmsTags } from "@/sdk/hooks/cms";
import { Loading } from "@/components/ui/loading";

export default function Benefits() {
  const locale = useLocale();
  const tabs = locale === "kr" ? ["무료", "할인"] : ["Free", "Discount"];
  const t = useTranslations("Gerege Tour Card Benefits").raw;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [timestamp, setTimestamp] = useState(Date.now());

  const { cmsCategories } = useCmsCategories();
  const { cmsTags } = useCmsTags();

  const freeCmsCategories = cmsCategories.filter(
    (category) =>
      category.slug === "transport" ||
      category.slug === "traditional-costume-rental" ||
      category.slug === "museum" ||
      category.slug === "gift" ||
      category.slug === "data-sim"
  );

  const discountCmsCategories = cmsCategories.filter(
    (category) =>
      category.slug !== "transport" &&
      category.slug !== "traditional-costume-rental" &&
      category.slug !== "museum" &&
      category.slug !== "gift" &&
      category.slug !== "data-sim"
  );

  return (
    <>
      <div id="gerege-benefit" className="w-full flex flex-col gap-8">
        <Heading title={t("title")} desc={t("subtitle")} data-aos="fade-up" />

        <div className="flex justify-center" data-aos="fade-up">
          <Tabs
            value={selectedTab}
            onValueChange={(value) => {
              setSelectedTab(value), setTimestamp(Date.now());
            }}
            className="items-center"
          >
            <TabsList className="rounded-3xl">
              {cmsTags?.map((tag, index) => {
                return (
                  <TabsTrigger
                    key={index}
                    value={tag.name}
                    className="flex gap-2 rounded-3xl"
                  >
                    <div className="w-6 h-6">
                      <Image
                        src={
                          tag.name === "Free"
                            ? "/image/tabs/free.png"
                            : "/image/tabs/discount.png"
                        }
                        width={100}
                        height={100}
                        quality={100}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>

                    {tag.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 content-stretch"
          data-aos="fade-up"
        >
          {selectedTab === "Free"
            ? [...freeCmsCategories, { _id: "", name: "", slug: "" }]?.map(
                (category) => (
                  <CategoryCard
                    category={category}
                    timestamp={timestamp}
                    key={category.slug}
                  />
                )
              )
            : discountCmsCategories?.map((category) => (
                <CategoryCard
                  category={category}
                  timestamp={timestamp}
                  key={category.slug}
                />
              ))}
        </div>
      </div>
    </>
  );
}
