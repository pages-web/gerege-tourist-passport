"use client";

import Heading from "@/components/heading/heading";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Benefit = () => {
  const t = useTranslations("Gerege Tour Card Benefits").raw;
  const slug = useParams().slug;

  const slugString = decodeURIComponent(Array.isArray(slug) ? slug[0] : slug);

  const benefit = ["frees", "discounts"]
    .flatMap((key) => t(key).flatMap((item: any) => item.list))
    .find((item: any) => item.title.toLowerCase() === slugString.toLowerCase());

  console.log(benefit);

  return (
    <div className="min-h-screen container">
      <div className="pt-10"></div>
      {benefit && (
        <div className="space-y-6">
          <Heading title={benefit.title} />
          <div className="text-base">
            <div
              dangerouslySetInnerHTML={{ __html: benefit.description }}
            ></div>
            <div dangerouslySetInnerHTML={{ __html: benefit.content }}></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Benefit;
