"use client";

import { useTranslations, useLocale } from "next-intl";
import NewsCarousel from "./news-carousel";
import Heading from "@/components/heading/heading";
import { useCmsPosts, useCmsTags } from "@/sdk/hooks/cms";

const NewsAndTips = () => {
  const t = useTranslations("NewsAndTips").raw;
  const locale = useLocale();

  const localeMap: Record<string, string> = {
    "en-us": "en",
    kr: "ko",
  };

  const currentLang = localeMap[locale] || "en";

  const { cmsTags } = useCmsTags({ language: currentLang });

  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag) => tag.name === "News")?._id],
    language: currentLang,
  });

  return (
    <div className="container w-full overflow-hidden flex flex-col justify-between gap-14 scroll-mt-40 ">
      <Heading title={t("titles")} data-aos="fade-up" />
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
};

export default NewsAndTips;
