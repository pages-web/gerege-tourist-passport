"use client";

import Image from "@/components/ui/image";
import { IArticle } from "@/types/kb.types";
import { useRouter } from "next/navigation";

const NewsCard = (article: IArticle) => {
  const { _id, image, title, summary } = article;
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center gap-y-4 text-center md:mx-2 cursor-pointer"
      onClick={() => router.push(`/news/${_id}`)}
    >
      <div className="overflow-hidden rounded-full max-w-[185px] max-h-[185px]">
        <Image
          alt=""
          src={image?.url || ""}
          width={185}
          height={185}
          className="w-full h-full"
        />
      </div>
      <h3 className="md:text-[20px] text-[16px] text-gray-800 font-bold">
        {title}
      </h3>
      <p className="text-[#475467] md:text-[14px] text-[12px] overflow-hidden line-clamp-3">
        {summary}
      </p>
    </div>
  );
};

export default NewsCard;
