"use client";

import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { useTranslations } from "next-intl";

const UserInfo = () => {
  const t = useTranslations("Welcome");
  const user = useAtomValue(currentUserAtom);

  const gender = user?.gender || "notset";
  const age = user?.age ?? null;
  const country = user?.country ?? null;

  const genderBgColor =
    gender === "Male"
      ? "bg-blue-200 text-blue-800"
      : gender === "Female"
      ? "bg-pink-200 text-pink-800"
      : gender === "Other"
      ? "bg-gray-200 text-gray-800"
      : "border border-red-600 text-black";

  const ageBorder = age ? "border border-gray-300" : "border border-red-600";
  const countryBorder = country
    ? "border border-gray-300"
    : "border border-red-600";

  return (
    <div className="text-sm text-black space-y-2">
      <div className="flex items-center">
        <span className="min-w-[80px]">{t("genders")}:</span>
        <span className={`font-medium px-3 py-1 rounded ${genderBgColor}`}>
          {gender !== "notset" ? gender : t("NotSet")}
        </span>
      </div>

      <div className="flex items-center">
        <span className="min-w-[80px]">{t("age")}:</span>
        <span className={`font-medium px-3 py-1 rounded ${ageBorder}`}>
          {age ?? t("NotSet")}
        </span>
      </div>

      <div className="flex items-center">
        <span className="min-w-[80px]">{t("country")}:</span>
        <span className={`font-medium px-3 py-1 rounded ${countryBorder}`}>
          {country ?? t("NotSet")}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
