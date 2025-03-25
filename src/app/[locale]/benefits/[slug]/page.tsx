"use client";

import Heading from "@/components/heading/heading";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Link, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Benefit = () => {
  const t = useTranslations("Gerege Tour Card Benefits").raw;
  const slug = useParams().slug;
  const locale = useLocale();
  const router = useRouter();

  const slugString = decodeURIComponent(Array.isArray(slug) ? slug[0] : slug);

  const benefits = ["frees", "discounts"].flatMap((key) =>
    t(key).flatMap((item: any) => item.list)
  );
  const benefit = benefits.find(
    (item: any) => item.title.toLowerCase() === slugString.toLowerCase()
  );

  // useEffect(() => {
  //   if (locale === "en-us") {
  //     // router.replace(`/benefits/${}`);
  //   }
  // }, []);

  return (
    <div className="min-h-screen container">
      <div className="pt-10"></div>
      {benefit && (
        <div className="space-y-6">
          <Heading title={benefit.title} />
          <div className="">
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={2000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </div>
          <div className="text-base">
            <div
              dangerouslySetInnerHTML={{ __html: benefit.description }}
            ></div>
            <div dangerouslySetInnerHTML={{ __html: benefit.content }}></div>
            <div className="mt-2"></div>
            {benefit.path !== "" && (
              <Link href={benefit.path} target="_blank">
                <Button>{t("visitButton")}</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Benefit;
