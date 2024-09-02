"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

const CategoryItem = ({
  title,
  icon,
  isHome,
  className,
}: {
  title: string;
  icon?: ReactNode;
  isHome?: boolean;
  className?: string;
}) => {
  const searchParams = useSearchParams().get("cg");
  const pathname = usePathname();

  return (
    <Link
      className={`text-nowrap flex items-center gap-x-2 border px-[18px] py-3 cursor-pointer text-[12px] md:text-[16px] font-medium uppercase ${
        searchParams === title
          ? "text-[#0087FF] bg-[#EBFAFF] border-[#AFEAFF]"
          : "text-[#1D2939] bg-white border-[#EAECF0]"
      } ${className}`}
      href={isHome ? `${pathname}/?cg=${title}` : `/benefits-info?cg=${title}`}
      scroll={false}
    >
      {icon}
      {title}
    </Link>
  );
};
export default CategoryItem;
