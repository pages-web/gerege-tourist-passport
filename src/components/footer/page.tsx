"use client";
import React, { ReactNode } from "react";
import Image from "../ui/image";

import { useTranslations } from "next-intl";
import {
  Ambulance,
  Facebook,
  FireExtinguisher,
  Mail,
  MapPin,
  Phone,
  Siren,
} from "lucide-react";
import { Instagram } from "@mui/icons-material";
import { Link } from "@/navigation";

type List = {
  name: string;
  link?: string;
  icon?: ReactNode;
};

type Lists = {
  title: string;
  lists: List[];
};

export const TitleLists = ({ data }: { data: Lists }) => {
  return (
    <div className="space-y-4 max-w-[340px]">
      <h3 className="font-bold text-[20px] lg:text-[24px]">{data.title}</h3>
      <div className="flex flex-col gap-y-3">
        {data.lists.map((list, index) => {
          return (
            <div
              className="flex lg:items-start items-center gap-x-2"
              key={index}
            >
              {list.icon && (
                <span className="md:w-6 md:h-6 flex items-start">
                  {list.icon === "phone" && <Phone className="w-6 h-6" />}
                  {list.icon === "mail" && <Mail className="w-6 h-6" />}
                  {list.icon === "mapPin" && <MapPin className="w-6 h-6" />}
                </span>
              )}
              <p className="text-[18px]">{list.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Footer() {
  const t = useTranslations("footer").raw;
  return (
    <div className="w-full bg-[#6399CE] pt-10 text-white relative overflow-hidden">
      <div className="container">
        <div className="flex justify-between lg:flex-row flex-col gap-8 flex-wrap">
          {t("content").map((data: any, index: number) => {
            return <TitleLists data={data} key={index} />;
          })}

          <div className="space-y-4">
            <h3 className="font-bold text-[20px] lg:text-[24px]">
              Emergency number in Mongolia
            </h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex lg:items-start items-center gap-x-2">
                <Siren className="w-5 h-5 md:w-7 md:h-7" />
                <p className="text-[18px]">Police: 102</p>
              </div>
              <div className="flex lg:items-start items-center gap-x-2">
                <Ambulance className="w-5 h-5 md:w-7 md:h-7" />
                <p className="text-[18px]">Ambulance: 103</p>
              </div>
              <div className="flex lg:items-start items-center gap-x-2">
                <FireExtinguisher className="w-5 h-5 md:w-7 md:h-7" />
                <p className="text-[18px]">Fire Department: 101</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-[20px] lg:text-[24px]">Socials</h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-wrap gap-x-1 md:gap-x-2">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61559305625217"
                  }
                  target="_blank"
                >
                  <div className="lg:w-14 lg:h-14 w-10 h-10 flex justify-center items-center rounded-full bg-[#5585b6]">
                    <Facebook className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/gerege.mn/"}
                  target="_blank"
                >
                  <div className="lg:w-14 lg:h-14 w-10 h-10 flex justify-center items-center rounded-full bg-[#5585b6]">
                    <Instagram className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10"></div>

      <div className="container flex md:justify-between justify-center items-center border-t border-[#6399CE] py-4 md:py-8">
        <Image
          src={"/image/footer-logo.png"}
          alt=""
          width={180}
          height={85}
          quality={100}
          className="hidden md:block"
        />
        <p className="text-[12px] lg:text-[14px] text-center">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
