"use client";

import { useTranslations } from "next-intl";
import NewsCarousel from "./news-carousel";
import Heading from "@/components/heading/heading";
import { useCmsCategories, useCmsPosts, useCmsTags } from "@/sdk/hooks/cms";
import { IPageProps } from "@/types";

const NewsAndTips = ({ params }: IPageProps) => {
  const t = useTranslations("NewsAndTips").raw;

  const { cmsTags } = useCmsTags();
  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag) => tag.name === "News")?._id],
    language: "en",
  });
  const localeMap: Record<string, string> = {
    "en-us": "en",
    kr: "ko",
  };

  return (
    <div className="container w-full overflow-hidden flex flex-col justify-between gap-14 scroll-mt-40 ">
      <Heading title={t("title")} data-aos="fade-up" />

      <NewsCarousel posts={cmsPosts} />
    </div>
  );
};
export default NewsAndTips;
