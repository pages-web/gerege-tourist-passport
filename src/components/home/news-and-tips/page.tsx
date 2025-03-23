"use client";

import { kbCategoryDetail } from "@/sdk/queries/kb";
import { useTranslations } from "next-intl";
import NewsCarousel from "./news-carousel";
import Heading from "@/components/heading/heading";

const NewsAndTips = () => {
  const t = useTranslations("NewsAndTips").raw;
  // const { category } = await kbCategoryDetail({
  //   variables: {
  //     _id: "news",
  //   },
  // });

  // if (!category) return null;

  return (
    <div
      id="news-and-tips"
      className="w-full overflow-hidden flex flex-col justify-between gap-14"
    >
      <Heading title={t("title")} desc={t("description")} />

      <NewsCarousel news={t("news")} />
    </div>
  );
};
export default NewsAndTips;
