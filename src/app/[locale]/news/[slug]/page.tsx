"use client";

import Heading from "@/components/heading/heading";
import NewsAuthor from "@/components/news-author/news-author";
import Image from "@/components/ui/image";
import { getKbArticleDetail } from "@/sdk/queries/kb";
import { IPageProps } from "@/types";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const News = ({ params }: IPageProps) => {
  // const { article } = await getKbArticleDetail({
  //   variables: {
  //     id: params.slug,
  //   },
  // });

  // return (
  //   <div className="min-h-screen container mt-16 space-y-10">
  //     <h1 className="font-bold text-[50px] text-[#1D2939]">{article.title}</h1>
  //     <div className="flex flex-col lg:flex-row gap-20 justify-between ">
  //       <NewsAuthor {...article} />
  //       <div
  //         dangerouslySetInnerHTML={{ __html: article.content }}
  //         className="max-w-[80%]"
  //       ></div>
  //     </div>
  //   </div>
  // );

  const t = useTranslations("NewsAndTips").raw;
  const slug = useParams().slug;

  const slugString = decodeURIComponent(Array.isArray(slug) ? slug[0] : slug);

  const news = t("news").find(
    (item: any) => item?.title.toLowerCase() === slugString.toLowerCase()
  );

  console.log(news);

  return (
    <div className="min-h-screen container">
      <div className="pt-10"></div>
      {news && (
        <div className="space-y-6">
          <Heading title={news.title} />
          <div className="">
            <Image
              src={news.image}
              alt={news.title}
              width={2000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </div>
          <div className="text-base">
            <div dangerouslySetInnerHTML={{ __html: news.description }}></div>
            <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
