"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const params = useParams();
  const t = useTranslations("footer");
  return (
    <div
      className="w-full lg:max-w-screen-2xl lg:h-[390px] h-fit bg-[#034EA2] flex flex-col items-center justify-between lg:pt-[50px] bg-no-repeat lg:bg-right bg-center lg:bg-[length:70%_100%] bg-[length:90%_50%]"
      style={{
        backgroundImage: "url(/image/footer-bg-logo.png)",
      }}
    >
      {/* Start responsive desktop */}
      <div className="lg:hidden-block hidden w-fit h-[185px] lg:flex gap-[100px]">
        <div className="w-[150px] h-full flex flex-col justify-between">
          <div className="text-white text-[24px] font-bold">{t("about")}</div>
          <Link
            href={`${params.locale}/about-us`}
            className="text-white text-[16px] font-normal"
          >
            {t("about_us")}
          </Link>
          <Link
            href={`${params.locale}/Cultural-Expierense`}
            className="text-white text-[16px] font-normal"
          >
            {t("cultural_experience")}
          </Link>
          <Link
            href={`${params.locale}/Restaurant`}
            className="text-white text-[16px] font-normal"
          >
            {t("restaurant")}
          </Link>
          <Link
            href={`${params.locale}/Hotel`}
            className="text-white text-[16px] font-normal"
          >
            {t("hotel")}
          </Link>
        </div>

        <div className="w-[209px] h-full flex flex-col gap-[20px]">
          <div className="text-white text-[24px] font-bold">
            {t("our_contacts")}
          </div>
          <div className="text-white text-[16px] font-normal flex gap-1 items-center    ">
            <LocalPhoneIcon />
            <div>+976 7777-1214</div>
          </div>
          <div className="text-white font-normal flex gap-1 items-center">
            <MailIcon />
            <div className="text-[14px]">info@gerege-passport.mn</div>
          </div>
        </div>

        <div className="w-[324px] h-full flex flex-col gap-[20px]">
          <div className="text-white text-[24px] font-bold">
            {t("our_address")}
          </div>
          <div className="text-white text-[13px] lg:w-full font-normal flex gap-1">
            <LocationOnIcon />
            <div>
              1406, Pro One Office, 11th khoroo, Sukhbaatar District,
              Ulaanbaatar, Mongolia
            </div>
          </div>
        </div>

        <div className="w-[274px] h-full flex flex-col gap-6">
          <div className="text-white text-[24px] font-bold">
            {t("our_social")}
          </div>
          <Link
            href="https://facebook.com"
            className="text-white text-[14px] font-normal flex gap-1 items-center"
          >
            <div className="w-[32px] h-[32px] rounded-full bg-[#0163E0] flex items-center justify-center">
              <Image alt="" src="/image/f.png" width={12} height={22} />
            </div>

            <div> Gerege Tourist Passport Mongolia</div>
          </Link>
          <Link
            href="https://www.instagram.com/gerege.mn/"
            className="text-white text-[14px] font-normal flex items-center gap-1"
          >
            <Image alt="" src="/image/instagram.png" width={32} height={32} />
            <div>@gerege.mn</div>
          </Link>
        </div>
      </div>
      {/* End responsive desktop */}

      {/* Start responsive moblie */}
      <div className="lg:hidden w-[389px] h-fit flex flex-col items-center text-center gap-8 py-4">
        <div className="w-[150px] h-[180px] flex flex-col justify-between">
          <div className="text-white text-[24px] font-bold">{t("about")}</div>
          <Link
            href={`${params.locale}/about-us`}
            className=" text-gray-300 text-[16px] font-normal"
          >
            {t("about_us")}
          </Link>
          <Link
            href={`${params.locale}/Cultural-Expierense`}
            className=" text-gray-300 text-[16px] font-normal"
          >
            {t("cultural_experience")}
          </Link>
          <Link
            href={`${params.locale}/Restaurant`}
            className=" text-gray-300 text-[16px] font-normal"
          >
            {t("cultural_experience")}
          </Link>
          <Link
            href={`${params.locale}/Hotel`}
            className=" text-gray-300 text-[16px] font-normal"
          >
            {t("hotel")}
          </Link>
        </div>

        <div className="w-[209px] h-fit flex flex-col gap-[10px]">
          <div className="text-white text-[24px] font-bold">
            {t("our_contacts")}
          </div>
          <div className=" text-gray-300 text-[14px] font-normal flex gap-1 items-center    ">
            <LocalPhoneIcon />
            <div>+976 7777-1214</div>
          </div>
          <div className="text-gray-300 font-normal flex gap-1 items-center">
            <MailIcon />
            <div className="text-[14px]">info@gerege-passport.mn</div>
          </div>
        </div>

        <div className="w-fit  h-fit flex flex-col gap-[10px]">
          <div className="text-white text-[24px] font-bold">
            {t("our_address")}
          </div>
          <div className="text-gray-300 text-[12px] w-[290px] font-normal flex">
            <LocationOnIcon />
            <div>
              1406, Pro One Office, 11th khoroo, Sukhbaatar District,
              Ulaanbaatar, Mongolia
            </div>
          </div>
        </div>

        <div className="w-[274px] h-fit flex flex-col gap-3">
          <div className="text-white text-[24px] font-bold">
            {t("our_social")}
          </div>
          <Link
            href="https://facebook.com"
            className=" text-gray-300 text-[14px] font-normal flex gap-1 items-center"
          >
            <div className="w-[26px] h-[26px] rounded-full bg-[#0163E0] flex items-center justify-center">
              <Image alt="" src="/image/f.png" width={12} height={16} />
            </div>

            <div> Gerege Tourist Passport Mongolia</div>
          </Link>
          <Link
            href="https://www.instagram.com/gerege.mn/"
            className="text-gray-300 text-[14px] font-normal flex items-center gap-1"
          >
            <Image alt="" src="/image/instagram.png" width={26} height={26} />
            <div>@gerege.mn</div>
          </Link>
        </div>
      </div>
      {/* End responsive moblie */}

      <div
        className="lg:w-full w-[389px] lg:h-[106px] h-[70px] flex justify-between items-center lg:px-[165px] px-4"
        style={{
          borderTop: "2px solid #006EFF",
          borderLeft: "1px solid #0163E0",
          borderRight: "1px solid #0163E0",
          borderBottom: "1px solid #0163E0",
        }}
      >
        <Image
          alt=""
          src="/image/footer-logo.png"
          width={109}
          height={54}
          className="lg:w-[109px] w-[70px] lg:h-[54px] h-[40px]"
        />
        <div className="text-white lg:text-[14px] text-[10px] w-[250px] font-normal">
          {t("copyright")}
        </div>
      </div>
    </div>
  );
}
