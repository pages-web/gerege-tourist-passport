"use client";

import Heading from "@/components/heading/heading";
import Image from "@/components/ui/image";
import { Loading } from "@/components/ui/loading";
import { useCmsPostDetail } from "@/sdk/hooks/cms";
import { IPageProps } from "@/types";
import { useTranslations } from "next-intl";

const News = ({ params }: IPageProps) => {
  const t = useTranslations("NewsAndTips").raw;

  const { slug, locale } = params;

  const localeMap: Record<string, string> = {
    "en-us": "en",
    kr: "ko",
  };

  const currentLang = localeMap[locale] || "en";

  // Сонгогдсон постыг авч байна
  const { cmsPostDetail, loading } = useCmsPostDetail({
    id: slug,
    language: currentLang,
  });

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen container">
      <div className="pt-10 lg:pt-32"></div>

      <div className="space-y-6">
        <Heading title={cmsPostDetail.title} data-aos="fade-up" />

        {cmsPostDetail.thumbnail?.url && (
          <div className="aspect-video" data-aos="fade-up">
            <Image
              src={cmsPostDetail.thumbnail.url}
              alt={cmsPostDetail.title}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full"
            />
          </div>
        )}

        <div
          data-aos="fade-up"
          className="text-base"
          dangerouslySetInnerHTML={{ __html: cmsPostDetail.content }}
        />
      </div>
    </div>
  );
};

export default News;
