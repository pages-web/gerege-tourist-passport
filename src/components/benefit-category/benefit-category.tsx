"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryItem from "../category-item/category-item";

const BenefitCategory = () => {
  const categories = [
    "all",
    "museum",
    "culture",
    "vouchers",
    "u point card",
    "data sim",
  ];
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/benefits-info") {
      router.push("/benefits-info?cg=all");
    }
  }, []);

  return (
    <div className="flex gap-x-3 md:overflow-visible overflow-x-scroll">
      {categories.map((item, index) => {
        return <CategoryItem title={item} key={index} />;
      })}
    </div>
  );
};
export default BenefitCategory;
