import BenefitCard from "@/components/benefit-cards/benefit-card";
import BenefitCategory from "@/components/benefit-category/benefit-category";
import BenefitSearch from "@/components/benefit-search/benefit-search";
import Heading from "@/components/heading/heading";
import { Separator } from "@/components/ui/Separator";
import { kbCategoryDetail } from "@/sdk/queries/kb";
import { IPageProps } from "@/types";

const BenefitsInfo = async ({ searchParams }: IPageProps) => {
  const { category } = await kbCategoryDetail({
    variables: {
      _id:
        searchParams.cg === "all" ? "vouchers" : searchParams.cg || "vouchers",
    },
  });

  if (!category) return null;

  const filteredArticles = category.articles.filter((article) => {
    const search = searchParams.search;
    if (!search) {
      return article;
    } else {
      return article.title.toLowerCase().includes(`${search}`);
    }
  });

  return (
    <div className="min-h-screen">
      <div className="space-y-12 container">
        <Heading
          title="GEREGE TOUR CARD Benefits"
          desc="Transportation card with discounts for shopping, attractions, performances and more"
          className="mt-5"
        />
        <BenefitCategory />
        <BenefitSearch {...category} />
      </div>
      <Separator className="mt-[18px] mb-16" />
      <div className="container space-y-3">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => {
            return <BenefitCard {...article} key={index} />;
          })
        ) : (
          <div className="text-center">Таны хайлт байхгүй байна.</div>
        )}
      </div>
    </div>
  );
};

export default BenefitsInfo;
