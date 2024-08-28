"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const CategoryItem = ({
  title,
  icon,
  isHome,
}: {
  title: string;
  icon?: ReactNode;
  isHome?: boolean;
}) => {
  const searchParams = useSearchParams().get("cg");
  return (
    <Link
      className={`flex items-center gap-x-2 border px-[18px] py-3 cursor-pointer text-[12px] md:text-[16px] font-medium uppercase ${
        searchParams === title
          ? "text-[#0087FF] bg-[#EBFAFF] border-[#AFEAFF]"
          : "text-[#1D2939] bg-white border-[#EAECF0]"
      }`}
      href={isHome ? `/?cg=${title}` : `/benefits-info?cg=${title}`}
      scroll={false}
    >
      {icon}
      {title}
    </Link>
  );
};
export default CategoryItem;
