"use client";

import Heading from "@/components/heading/heading";
import NewsAuthor from "@/components/news-author/news-author";
import Image from "@/components/ui/image";
import { Loading } from "@/components/ui/loading";
import { queries } from "@/sdk/graphql/cms";
import { useCmsPostDetail } from "@/sdk/hooks/cms";
import { getKbArticleDetail } from "@/sdk/queries/kb";
import { IPageProps } from "@/types";
import { useQuery } from "@apollo/client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const News = () => {
  const t = useTranslations("NewsAndTips").raw;
  const slug = useParams().slug;
  const { cmsPostDetail, loading } = useCmsPostDetail({ id: slug });

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div className="min-h-screen container">
      <div className="pt-10 lg:pt-32"></div>
      {cmsPostDetail && (
        <div className="space-y-6">
          <Heading title={cmsPostDetail.title} data-aos="fade-up" />

          <div className="aspect-video" data-aos="fade-up">
            <Image
              src={cmsPostDetail.thumbnail?.url}
              alt={cmsPostDetail.title}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full"
            />
          </div>

          <div
            data-aos="fade-up"
            className="text-base"
            dangerouslySetInnerHTML={{ __html: cmsPostDetail.content }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default News;
