"use client";

import Image from "@/components/ui/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {
  Clock3,
  Facebook,
  Globe,
  Instagram,
  MapPin,
  Phone,
  Snowflake,
  Sun,
} from "lucide-react";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IPageProps } from "@/types";
import { useCmsCategories, useCmsPosts } from "@/sdk/hooks/cms";
import { IBenefit, IBenefitList } from "@/types/data.types";
import { useEffect, useRef, useState } from "react";
import { Loading } from "@/components/ui/loading";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Benefit = ({ params }: IPageProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  const t = useTranslations("Gerege Tour Card Benefits").raw;

  const { cmsPosts: cmsPostsAll, loading: categoryLoading } = useCmsPosts({
    categoryId: params.slug,
  });
  const { cmsCategories, loading: postLoading } = useCmsCategories();

  const cmsPosts = cmsPostsAll?.filter(
    (post) => post.categoryIds[0] === params.slug
  );
  const currentCategory = cmsCategories?.find(
    (category) => category._id === params.slug
  );
  const currentCategoryData: IBenefit =
    t("frees").find(
      (free: IBenefitList) => free.title === currentCategory?.slug
    ) ||
    t("discount").find(
      (free: IBenefitList) => free.title === currentCategory?.slug
    );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveId(id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // adjust for header offset
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cmsPosts]);

  if (categoryLoading || postLoading)
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div className="relative min-h-screen container flex flex-col lg:flex-row gap-10 pt-10 scroll-mt-40">
      <div className="hidden lg:flex flex-col gap-6 font-semibold sticky top-40 h-full w-[20%]">
        <h2 className="text-xl text-[#64748B]">
          {cmsPosts[0].tags[0].name} {currentCategory?.name}
        </h2>

        {cmsPosts.map((post) => (
          <Link
            className={`text-sm ${
              activeId === post._id ? "text-[#0F172A]" : "text-[#64748B]"
            }`}
            href={`#${post._id}`}
            key={post._id}
          >
            {post.title}
          </Link>
        ))}
      </div>

      <Select>
        <SelectTrigger defaultValue={cmsPosts[0]._id} className="lg:hidden">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {cmsPosts.map((post) => (
            <Link href={`#${post._id}`} key={post._id}>
              <SelectItem value={post._id}>{post.title}</SelectItem>
            </Link>
          ))}
        </SelectContent>
      </Select>

      <div
        className={`w-full lg:w-[80%] ${
          cmsPosts[0].categories[0].slug === "entertainment" ||
          cmsPosts[0].categories[0].slug === "beauty-healthy"
            ? "grid grid-cols-2 gap-4"
            : "space-y-24"
        }`}
      >
        {cmsPosts?.map((post) => {
          const currentData = currentCategoryData?.list.find(
            (data) => data.title === post.title
          );

          return (
            <section
              className={`scroll-mt-40 ${
                cmsPosts[0].categories[0].slug !== "entertainment" &&
                cmsPosts[0].categories[0].slug !== "beauty-healthy" &&
                "space-y-4"
              }`}
              id={post._id}
              ref={(el) => {
                sectionRefs.current[post._id] = el;
              }}
              key={post._id}
            >
              {cmsPosts[0].categories[0].slug !== "entertainment" &&
                cmsPosts[0].categories[0].slug !== "beauty-healthy" && (
                  <h1 className="text-2xl font-bold">{post.title}</h1>
                )}

              <div className="">
                <Image
                  src={post.thumbnail?.url}
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="max-w-[90%] [&>h1]:text-xl [&>h1]:font-bold [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-10 [&>ol]:list-decimal [&>ol]:pl-10 space-y-2"
              ></div>

              <div className="space-y-2 lg:space-y-4">
                {currentData?.discount && (
                  <div className="flex items-center gap-2 text-xl">
                    <div className="w-6 h-6">
                      <Image
                        src="/image/tabs/discount.png"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    {currentData.discount} OFF
                  </div>
                )}

                {currentData?.location && (
                  <Link
                    className="flex gap-2"
                    href={`https://www.google.com/maps?q=${currentData?.location}`}
                    target="_blank"
                  >
                    <MapPin /> Tap to map
                  </Link>
                )}

                {currentData?.locations &&
                  currentData.locations.map((locationData, index) => (
                    <Link
                      className="flex gap-2"
                      href={`https://www.google.com/maps?q=${locationData.location}`}
                      target="_blank"
                      key={index}
                    >
                      <MapPin />
                      {/* {locationData.name}  */}
                      Department {index + 1}
                    </Link>
                  ))}

                {currentData?.timeTables && (
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value="item-1"
                      className="border-none max-w-[500px]"
                    >
                      <AccordionTrigger>
                        <div className="flex gap-2 font-normal">
                          <Clock3 />
                          Open
                        </div>
                      </AccordionTrigger>
                      <AccordionContent
                        className={`flex items-end justify-between gap-4 px-8`}
                      >
                        <div className="flex flex-col gap-1 capitalize">
                          {Object.keys(currentData.timeTables[0].days).map(
                            (day) => (
                              <p key={day}>{day}</p>
                            )
                          )}
                        </div>

                        {currentData?.timeTables?.map((timeTable) => (
                          <div
                            className="flex flex-col items-center gap-1 capitalize"
                            key={timeTable.season}
                          >
                            {timeTable.season === "summer" && (
                              <Sun className="w-5 h-5" />
                            )}
                            {timeTable.season === "winter" && (
                              <Snowflake className="w-5 h-5" />
                            )}

                            {Object.values(timeTable.days).map((time) => (
                              <p key={time}>{time}</p>
                            ))}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}

                {currentData?.phone && (
                  <div className="flex gap-2">
                    <Phone /> {currentData.phone}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 lg:gap-4">
                {currentData?.website && (
                  <Link target="_blank" href={currentData.website}>
                    <Button className="gap-2">
                      <Globe /> Visit Website
                    </Button>
                  </Link>
                )}

                {currentData?.facebook && (
                  <Link target="_blank" href={currentData.facebook}>
                    <Button className="gap-2">
                      <Facebook className="w-5 h-5" /> Visit Facebook
                    </Button>
                  </Link>
                )}

                {currentData?.instagram && (
                  <Link target="_blank" href={currentData.instagram}>
                    <Button className="gap-2">
                      <Instagram className="w-5 h-5" /> Visit Instagram
                    </Button>
                  </Link>
                )}
              </div>

              <div className="space-y-4">
                {(currentData?.play_store || currentData?.app_store) && (
                  <h1 className="text-xl font-bold">Download:</h1>
                )}
                <div className="flex gap-4">
                  {currentData?.play_store && (
                    <Link target="_blank" href={currentData.play_store}>
                      <Button className="gap-2">
                        <Image
                          src="/image/play_store.png"
                          width={100}
                          height={100}
                          className="w-5 h-5"
                        />
                        Download now
                      </Button>
                    </Link>
                  )}

                  {currentData?.app_store && (
                    <Link target="_blank" href={currentData.app_store}>
                      <Button className="gap-2">
                        <Image
                          src="/image/app_store.png"
                          width={100}
                          height={100}
                          className="w-6 h-6"
                        />
                        Download now
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default Benefit;
