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
import BenefitImage from "@/components/benefit-image/benefit-image";

const timeTableKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const Benefit = ({ params }: IPageProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  const localeMap: Record<string, string> = {
    "en-us": "en",
    kr: "ko",
  };

  const currentLang = localeMap[params.locale] || "en";
  const { cmsPosts: cmsPostsAll, loading: categoryLoading } = useCmsPosts({
    categoryId: params.slug,
    language: currentLang,
  });

  const { cmsCategories, loading: postLoading } = useCmsCategories({
    language: currentLang,
  });

  const cmsPosts = cmsPostsAll?.filter(
    (post) => post.categoryIds[0] === params.slug
  );
  const currentCategory = cmsCategories?.find(
    (category) => category._id === params.slug
  );

  const childCategories = cmsCategories?.filter(
    (category) => category.parentId === params.slug
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveId(id);

              // Scroll corresponding sidebar link into view
              const linkEl = linkRefs.current[id];
              if (linkEl) {
                linkEl.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest", // "center" or "start" are alternatives
                });
              }
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
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
      <div className="hidden lg:flex flex-col gap-6 font-semibold sticky top-36 max-h-[calc(100vh-10rem)] w-[20%] overflow-y-auto no-scrollbar">
        <h2 className="text-xl text-[#64748B]">
          {cmsPosts[0]?.tags[0].name} {currentCategory?.name}
        </h2>

        {childCategories.length > 0 &&
          childCategories.map((category) => (
            <Link
              ref={(el) => {
                linkRefs.current[category._id] = el;
              }}
              className={`text-sm ${
                activeId === category._id ? "text-[#0F172A]" : "text-[#64748B]"
              }`}
              href={`#${category._id}`}
              key={category._id}
            >
              {category.name}
            </Link>
          ))}

        {cmsPosts.length > 0 &&
          cmsPosts.map((post) => (
            <Link
              ref={(el) => {
                linkRefs.current[post._id] = el;
              }}
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

      <div className="space-y-4 lg:hidden">
        <h2 className="text-2xl font-bold">
          {cmsPosts[0]?.tags[0].name} {currentCategory?.name}
        </h2>

        {cmsPosts.length > 0 && (
          <Select value={activeId!} onValueChange={setActiveId}>
            <SelectTrigger className="lg:hidden">
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
        )}
      </div>

      <div className={`w-full h-full lg:w-[80%] space-y-12 lg:space-y-24`}>
        {childCategories.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-4">
            {childCategories.map((category) => (
              <Link key={category._id} href={`/benefits/${category._id}`}>
                <section
                  className={`scroll-mt-40 space-y-4 rounded-xl flex flex-col justify-center items-center h-[400px] text-white bg-[#6399CE] hover:scale-105 duration-300`}
                  id={category._id}
                  ref={(el) => {
                    sectionRefs.current[category._id] = el;
                  }}
                >
                  <div className="h-24 w-24">
                    <Image
                      src={
                        category.slug === "karaoke"
                          ? "/image/discounts/karaoke.png"
                          : category.slug === "night-strip-club"
                          ? "/image/discounts/club.png"
                          : category.slug === "sport-bar"
                          ? "/image/discounts/sport.png"
                          : ""
                      }
                      width={96}
                      height={96}
                      className="w-full h-full"
                      alt={category.slug}
                    />
                  </div>
                  <h1 className="text-2xl font-bold">{category.name}</h1>
                </section>
              </Link>
            ))}
          </div>
        )}

        {cmsPosts.length > 0 &&
          cmsPosts?.map((post) => {
            const currentData = post.customFieldsMap?.benefitPost;
            const locations = currentData?.locations
              ? currentData.locations
                  .split(",")
                  .map((item: string) => item.split(" ").join(","))
              : [];

            return (
              <section
                className={`scroll-mt-40 space-y-4`}
                id={post._id}
                ref={(el) => {
                  sectionRefs.current[post._id] = el;
                }}
                key={post._id}
              >
                <h1 className="text-2xl font-bold">{post.title}</h1>

                {post.thumbnail && (
                  <div className="grid grid-cols-2 gap-2">
                    <BenefitImage attachment={post.thumbnail} />

                    {post.images?.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {post.images.map((image, index) => (
                          <BenefitImage attachment={image} key={index} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  className="max-w-[90%] [&>h1]:text-xl [&>h1]:font-bold [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-10 [&>ol]:list-decimal [&>ol]:pl-10 space-y-2"
                ></div>

                {post.content !== "" && post.content !== "<p></p>" && (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-bold text-xl">
                        Continued:
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.content }}
                          className="max-w-[90%] [&>h1]:text-xl [&>h1]:font-bold [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-10 [&>ol]:list-decimal [&>ol]:pl-10 space-y-2"
                        ></div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}

                <div className="space-y-2 lg:space-y-4">
                  {currentData?.discount_value && (
                    <div className="flex items-center gap-2 text-xl">
                      <div className="w-6 h-6">
                        <Image
                          src="/image/tabs/discount.png"
                          width={100}
                          height={100}
                          className="w-full h-full"
                          alt="discount"
                        />
                      </div>
                      {currentData.discount_value} OFF
                    </div>
                  )}

                  {locations &&
                    (locations.length < 2 ? (
                      <Link
                        className="flex gap-2"
                        href={`https://www.google.com/maps/dir/${locations[0]}`}
                        target="_blank"
                      >
                        <MapPin />
                        {"Tap to map"}
                      </Link>
                    ) : (
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {currentData.location_text
                              ? currentData.location_text
                              : "Locations"}
                          </AccordionTrigger>
                          <AccordionContent className="text-base space-y-2">
                            {locations.map((location, index) => (
                              <Link
                                className="flex gap-2"
                                href={`https://www.google.com/maps/dir/${location}`}
                                target="_blank"
                                key={index}
                              >
                                <MapPin className="w-6 h-6" />
                                {"Tap to map"}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}

                  {currentData?.time_table && (
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value="item-1"
                        className="border-none max-w-[500px]"
                      >
                        <AccordionTrigger className="py-0">
                          <div className="flex gap-2 font-normal">
                            <Clock3 />
                            Open
                          </div>
                        </AccordionTrigger>
                        <AccordionContent
                          className={`flex items-end justify-between gap-4 px-8 ${
                            !currentData.winter_time_table ? "mt-4" : ""
                          }`}
                        >
                          <div className="flex flex-col gap-1 capitalize">
                            {timeTableKeys.map((day) => (
                              <p key={day}>{day}</p>
                            ))}
                          </div>

                          <div className="flex flex-col items-center gap-1 capitalize ">
                            {currentData.winter_time_table && (
                              <Sun className="w-5 h-5" />
                            )}

                            {currentData.time_table.split(",").map((time) => (
                              <p key={time}>{time}</p>
                            ))}
                          </div>

                          {currentData.winter_time_table && (
                            <div className="flex flex-col items-center gap-1 capitalize ">
                              <Snowflake className="w-5 h-5" />

                              {currentData.winter_time_table
                                .split(",")
                                .map((time) => (
                                  <p key={time}>{time}</p>
                                ))}
                            </div>
                          )}
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
                  {currentData?.website_link && (
                    <Link target="_blank" href={currentData.website_link}>
                      <Button className="gap-2">
                        <Globe /> Visit Website
                      </Button>
                    </Link>
                  )}

                  {currentData?.facebook_link && (
                    <Link target="_blank" href={currentData.facebook_link}>
                      <Button className="gap-2">
                        <Facebook className="w-5 h-5" /> Visit Facebook
                      </Button>
                    </Link>
                  )}

                  {currentData?.instagram_link && (
                    <Link target="_blank" href={currentData.instagram_link}>
                      <Button className="gap-2">
                        <Instagram className="w-5 h-5" /> Visit Instagram
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="space-y-4">
                  {(currentData?.play_store_link ||
                    currentData?.app_store_link) && (
                    <h1 className="text-xl font-bold">Download:</h1>
                  )}
                  <div className="flex gap-4">
                    {currentData?.play_store_link && (
                      <Link target="_blank" href={currentData.play_store_link}>
                        <Button className="gap-2">
                          <Image
                            src="/image/play_store.png"
                            width={100}
                            height={100}
                            className="w-5 h-5"
                            alt="play store"
                          />
                          Download now
                        </Button>
                      </Link>
                    )}

                    {currentData?.app_store_link && (
                      <Link target="_blank" href={currentData.app_store_link}>
                        <Button className="gap-2">
                          <Image
                            src="/image/app_store.png"
                            width={100}
                            height={100}
                            className="w-6 h-6"
                            alt="app store"
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
