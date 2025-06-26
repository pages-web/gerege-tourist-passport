"use client";
import React from "react";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCmsPosts, useCmsTags } from "@/sdk/hooks/cms";
import Heading from "@/components/heading/heading";
import {
  Ambulance,
  Clock3,
  FireExtinguisher,
  MapPin,
  Phone,
  Siren,
} from "lucide-react";
import { Link } from "@/navigation";
import { IHelp } from "@/types/data.types";

export default function FAQ() {
  const t = useTranslations("FAQ").raw;

  const { cmsTags } = useCmsTags();
  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag) => tag.name === "Faq")?._id],
  });

  return (
    <div className="container space-y-10">
      <Heading title={t("title")} data-aos="fade-up" />

      <Accordion
        type="single"
        collapsible
        className="w-full"
        data-aos="fade-up"
      >
        {cmsPosts.map((post, index) => {
          return (
            <AccordionItem
              value={post._id}
              key={index}
              className="rounded-lg m-1"
            >
              <AccordionTrigger>{post.title}</AccordionTrigger>
              <AccordionContent>
                <div
                  className="[&>u]:font-bold [&>u]:text-black"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
        {t("helps").map((help: IHelp, index: number) => {
          return (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="rounded-lg m-1"
            >
              <AccordionTrigger>{help.title}</AccordionTrigger>
              <AccordionContent>
                {help.list && (
                  <Accordion type="single" collapsible className="pl-3 md:pl-6">
                    {help.list.map((list, index) => (
                      <AccordionItem value={`multi-item-${index}`} key={index}>
                        <AccordionTrigger>{list.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex gap-4 lg:px-10">
                            {list.location && (
                              <Link
                                className="flex items-center gap-2"
                                href={`https://www.google.com/maps?q=${list.location}`}
                                target="_blank"
                              >
                                <MapPin className="min-h-5 min-w-5" />
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: list.locationText
                                      ? list.locationText
                                      : "Tap to map",
                                  }}
                                ></p>
                              </Link>
                            )}

                            {list.locationText && !list.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="min-h-5 min-w-5" />
                                {list.locationText}
                              </div>
                            )}

                            {list?.phone && (
                              <div className="flex gap-2 items-center">
                                <Phone className="min-h-5 min-w-5" />{" "}
                                {list.phone}
                              </div>
                            )}

                            {list?.timeTables && (
                              <div className="flex gap-2">
                                <Clock3 className="min-h-5 min-w-5" />
                                <div className={`flex items-end gap-4`}>
                                  <div className="flex flex-col gap-1 capitalize">
                                    {Object.keys(list.timeTables[0].days).map(
                                      (day) => (
                                        <p key={day}>{day}</p>
                                      )
                                    )}
                                  </div>

                                  {list?.timeTables?.map((timeTable) => (
                                    <div
                                      className="flex flex-col items-center gap-1 capitalize"
                                      key={timeTable.season}
                                    >
                                      {Object.values(timeTable.days).map(
                                        (time) => (
                                          <p key={time}>{time}</p>
                                        )
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {list?.timeTableText && (
                              <div className="flex gap-2 font-normal items-center">
                                <Clock3 className="min-h-5 min-w-5" />
                                {list.timeTableText}
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
                {help.location && help.phone && help.timeTableText && (
                  <div className="flex gap-4">
                    {help.location && (
                      <Link
                        className="flex items-center gap-2"
                        href={`https://www.google.com/maps?q=${help.location}`}
                        target="_blank"
                      >
                        <MapPin />
                        Tap to map
                      </Link>
                    )}

                    {help.phone && (
                      <div className="flex gap-2 items-center">
                        <Phone className="h-5 w-5" /> {help.phone}
                      </div>
                    )}

                    {help?.timeTables && (
                      <div className="flex gap-2">
                        <Clock3 />
                        <div className={`flex items-end gap-4`}>
                          <div className="flex flex-col gap-1 capitalize">
                            {Object.keys(help.timeTables[0].days).map((day) => (
                              <p key={day}>{day}</p>
                            ))}
                          </div>

                          {help?.timeTables?.map((timeTable) => (
                            <div
                              className="flex flex-col items-center gap-1 capitalize"
                              key={timeTable.season}
                            >
                              {Object.values(timeTable.days).map((time) => (
                                <p key={time}>{time}</p>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {help?.timeTableText && (
                      <div className="flex gap-2 font-normal items-center">
                        <Clock3 />
                        {help.timeTableText}
                      </div>
                    )}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
