"use client";
import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/button";
import { IKBCategoryDetail } from "@/types/kb.types";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LoyaltyCardImage from "./loyalty-card-image";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { listMapAtom } from "@/store";

const LoyaltyCardDetail = (category: IKBCategoryDetail) => {
  const articles = category.articles;
  const pathname = usePathname();
  const router = useRouter();
  const cgSearch = useSearchParams().get("cg") || "hotel";
  const articleSearch = useSearchParams().get("articleId");
  const [isMap] = useAtom(listMapAtom);
  const currArticle = articleSearch
    ? articles?.find((article) => article._id === articleSearch)
    : articles[0];

  useEffect(() => {
    if (!articleSearch) {
      router.push(`${pathname}/?cg=${cgSearch}&articleId=${currArticle?._id}`, {
        scroll: false,
      });
    }
  }, [articleSearch, currArticle?._id, cgSearch, pathname, router]);

  return (
    <div className="p-3 md:p-6 space-y-3 md:space-y-6">
      <h2 className="font-semibold text-[16px] md:text-[20px] text-[#1D2939]">
        {currArticle?.title}
      </h2>
      <Separator />
      <div
        className={`flex md:flex-row flex-col gap-4 md:gap-8 justify-between`}
      >
        <div className="flex flex-col justify-between gap-3 md:gap-6">
          <p className="text-[#475467] text-[12px] md:text-[16px] md:max-w-[400px]">
            {currArticle?.summary}
          </p>
          <Link href={`/info/${currArticle?._id}`}>
            <Button className="uppercase text-[12px] md:text-[14px] ">
              Check for details
            </Button>
          </Link>
        </div>
        <div className="md:flex flex-wrap xl:flex-nowrap justify-end gap-3 grid grid-cols-2 justify-items-stretch">
          {!isMap
            ? articles?.slice(0, 4).map((article, index, arr) => (
                <Link 
                  key={article._id}
                  href={
                    index === 3
                      ? `/benefits-info?cg=all`
                      : `${pathname}/?cg=${cgSearch}&articleId=${article._id}`
                  }
                  scroll={false}
                >
                  <LoyaltyCardImage
                    article={article}
                    index={index}
                    maxLength={articles.length}
                    slicedLength={arr.length}
                  />
                </Link>
              ))
            : articles.slice(0, 2).map((article, index, arr) => (
                <Link
                  key={article._id}
                  href={
                    index === 3
                      ? `/benefits-info?cg=all`
                      : `${pathname}/?cg=${cgSearch}&articleId=${article._id}`
                  }
                  scroll={false}
                >
                  <LoyaltyCardImage
                    article={article}
                    index={index}
                    maxLength={articles.length}
                    slicedLength={arr.length}
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCardDetail;
