"use client";

import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { useTranslations } from "next-intl";

const UserInfo = () => {
  const t = useTranslations("Welcome");
  const user = useAtomValue(currentUserAtom);

  const age =
    user?.customFieldsData?.find((f) => f.field === "RW9QvGiHnj4Uc_zoLXTaj")
      ?.value ?? null;
  const gender =
    user?.customFieldsData?.find((f) => f.field === "DQQsZm-hsuQsqPb8W_vbL")
      ?.value ?? "notset";
  const country =
    user?.customFieldsData?.find((f) => f.field === "TM6BT3QGRX2vZ50e-7VMj")
      ?.value ?? null;

  const genderLower = gender.toLowerCase();

  const genderBgColor =
    genderLower === "male"
      ? "bg-blue-200 text-blue-800"
      : genderLower === "female"
      ? "bg-pink-200 text-pink-800"
      : genderLower === "other"
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
          {gender !== "notset" ? t(genderLower) : t("NotSet")}
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
