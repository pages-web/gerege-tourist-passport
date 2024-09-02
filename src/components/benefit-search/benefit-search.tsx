"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { IKBCategoryDetail } from "@/types/kb.types";
import { useParams, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BenefitSearch = (category: IKBCategoryDetail) => {
  const router = useRouter();
  const param = useParams();

  const currentArticle = category.articles.find(
    (article) => article._id === param.slug
  );

  return (
    <div className="flex justify-between gap-10">
      {currentArticle ? (
        <Breadcrumb>
          <BreadcrumbList className="text-[16px]">
            <BreadcrumbItem>
              <BreadcrumbLink href="/benefits-info">Benefits</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#0087FF]">
                {currentArticle?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ) : (
        <p>
          Find out benefits from{" "}
          <span className="text-[#0087FF]">{category?.articles.length}</span>{" "}
          brands
        </p>
      )}

      {!currentArticle && (
        <div className="relative flex">
          <div className="px-2 h-10 border border-r-0 flex items-center">
            <Search className="w-5 h-5" />
          </div>
          <Input
            className="max-w-[250px] rounded-none border-l-0 pl-0"
            placeholder="Search brands..."
            onChange={(e) => {
              router.push(`/benefits-info/?search=${e.target.value}`);
            }}
          />
        </div>
      )}
    </div>
  );
};
export default BenefitSearch;
