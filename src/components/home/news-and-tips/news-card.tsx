"use client";

import Image from "@/components/ui/image";
import { IArticle } from "@/types/kb.types";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const NewsCard = (article: {
  title: string;
  description: string;
  image: string;
}) => {
  // const { _id, image, title, summary } = article;
  const router = useRouter();
  const locale = useLocale();
  return (
    <div
      className="flex flex-col items-center gap-y-4 text-center md:mx-2 cursor-pointer"
      onClick={() => router.push(`/news/${article.title}`)}
    >
      <div className="overflow-hidden rounded-full max-w-[185px] h-[185px]">
        <Image
          alt=""
          src={article.image || ""}
          width={185}
          height={185}
          className="w-full h-full"
        />
      </div>
      <h3 className="md:text-[20px] text-[16px] text-gray-800 font-bold">
        {article.title}
      </h3>
      <p className="text-[#475467] md:text-[14px] text-[12px] overflow-hidden line-clamp-3">
        {article.description}
      </p>
    </div>
  );
};

export default NewsCard;
