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
                    {list.icon}
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

const FooterData = [
  {
    title: "About",
    lists: [
      { name: "About us", link: "/#about" },
      { name: "Cultural experience", link: "/" },
      { name: "Restaurant", link: "/" },
      { name: "Hotel", link: "/" },
    ],
  },
  {
    title: "Our Contacts",
    lists: [
      {
        name: "+976 7777-1214",
        icon: <Phone className="w-4 h-4 md:w-6 md:h-6" />,
      },
      {
        name: "info@gerege-passport.mn",
        icon: <Mail className="w-4 h-4 md:w-6 md:h-6" />,
      },
    ],
  },
  {
    title: "Our Address",
    lists: [
      {
        name: "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
        icon: <MapPin className="w-4 h-4 md:w-6 md:h-6" />,
      },
    ],
  },
  {
    title: "Our social",
    lists: [
      {
        name: "Gerege Tourist Passport Mongolia",
        link: "https://www.facebook.com/profile.php?id=61559305625217",
        icon: <Facebook className="w-4 h-4 md:w-6 md:h-6" />,
      },
      {
        name: "@gerege.mn",
        link: "https://www.instagram.com/gerege.mn/",
        icon: <Instagram className="w-4 h-4 md:w-6 md:h-6" />,
      },
    ],
  },
];

export default function Footer() {
  const params = useParams();
  // const t = useTranslations("footer");
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
        <div className="md:flex md:justify-between grid grid-cols-2 gap-8 flex-wrap">
          {FooterData.map((data, index) => {
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
        <p className="text-[10px] md:text-[14px]">
          Copyright 2024. ⓒ GEREGE TOURIST PASSPORT. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
