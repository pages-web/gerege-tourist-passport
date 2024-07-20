import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div
      className="w-full h-[390px] bg-[#034EA2] flex flex-col items-center justify-between pt-[50px]"
      style={{
        backgroundImage: "url(/image/footer-bg-logo.png)",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "70% 100%",
      }}
    >
      <div className="w-fit h-[185px] flex gap-[100px]">
        <div className="w-[150px] h-full flex flex-col justify-between">
          <div className="text-white text-[24px] font-bold">About</div>
          <Link href="/about-us" className="text-white text-[16px] font-normal">
            About us
          </Link>
          <Link
            href="/Cultural-Expierense"
            className="text-white text-[16px] font-normal"
          >
            Cultural Expierense
          </Link>
          <Link
            href="/Restaurant"
            className="text-white text-[16px] font-normal"
          >
            Restaurant
          </Link>
          <Link href="/Hotel" className="text-white text-[16px] font-normal">
            Hotel
          </Link>
        </div>

        <div className="w-[209px] h-full flex flex-col gap-[20px]">
          <div className="text-white text-[24px] font-bold">Our contacts</div>
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
          <div className="text-white text-[24px] font-bold">Our address</div>
          <div className="text-white text-[12px] font-normal flex gap-1">
            <LocationOnIcon />
            <div>
              1406, Pro One Office, 11th khoroo, Sukhbaatar District,
              Ulaanbaatar, Mongolia
            </div>
          </div>
        </div>

        <div className="w-[274px] h-full flex flex-col gap-6">
          <div className="text-white text-[24px] font-bold">Our social</div>
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

      <div
        className="w-full h-[106px] border flex justify-between items-center px-[165px]"
        style={{
          borderTop: "2px solid #006EFF",
          borderLeft: "1px solid #0163E0",
          borderRight: "1px solid #0163E0",
          borderBottom: "1px solid #0163E0",
        }}
      >
        <Image alt="" src="/image/footer-logo.png" width={109} height={54} />
        <div className="text-white text-[14px] font-normal">
          Copyright 2024. ⓒ GEREGE TOURIST PASSPORT. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
