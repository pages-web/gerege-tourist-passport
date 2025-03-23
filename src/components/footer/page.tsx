"use client";
import React, { ReactNode } from "react";
import Image from "../ui/image";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram } from "@mui/icons-material";

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
      <h3 className="font-bold text-[16px] md:text-[24px]">{data.title}</h3>
      <div className="flex flex-col gap-y-3">
        {data.lists.map((list, index) => {
          return (
            <Link href={list.link || ""} key={index}>
              <div className="flex gap-x-1 md:gap-x-2">
                {list.icon && (
                  <span className="md:w-6 md:h-6 flex items-start">
                    {list.icon === "phone" && (
                      <Phone className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {list.icon === "mail" && (
                      <Mail className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {list.icon === "mapPin" && (
                      <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {list.icon === "facebook" && (
                      <Facebook className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {list.icon === "instagram" && (
                      <Instagram className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                  </span>
                )}
                <p className="text-[12px] md:text-[18px]">{list.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function Footer() {
  const t = useTranslations("footer").raw;
  return (
    <div className="bg-[#034EA2] pt-10 md:pt-20 mt-40 text-white relative overflow-hidden">
      <Image
        src={"/image/footer-bg-logo.png"}
        alt=""
        width={1400}
        height={600}
        quality={100}
        className="absolute right-0 top-10 md:top-0 opacity-15"
      />

      <div className="container">
        <div className="xl:flex xl:justify-between grid grid-cols-2 gap-8 flex-wrap">
          {t("content").map((data: any, index: number) => {
            return <TitleLists data={data} key={index} />;
          })}
        </div>
      </div>

      <div className="mt-10"></div>

      <div className="container flex md:justify-between justify-center items-center border-t border-[#006EFF] py-4 md:py-8">
        <Image
          src={"/image/footer-logo.png"}
          alt=""
          width={109}
          height={54}
          quality={100}
          className="hidden md:block"
        />
        <p className="text-[10px] md:text-[14px]">{t("description")}</p>
      </div>
    </div>
  );
}
