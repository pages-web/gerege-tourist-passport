import BenefitCategory from "@/components/benefit-category/benefit-category";
import BenefitSearch from "@/components/benefit-search/benefit-search";
import Heading from "@/components/heading/heading";
import InfoDetailFooter from "@/components/info-footer-detail.tsx/info-detail.footer";
import InfoDetail from "@/components/info-detail/info-detail";
import Tip from "@/components/tip/tip";
import { Separator } from "@/components/ui/Separator";
import { getKbArticleDetail, kbCategoryDetail } from "@/sdk/queries/kb";
import { IPageProps } from "@/types";
import { CircleCheckBig, Ticket, TriangleAlert } from "lucide-react";

const Info = async ({ params }: IPageProps) => {
  const { article } = await getKbArticleDetail({
    variables: {
      id: params.slug,
    },
  });

  const { category } = await kbCategoryDetail({
    variables: {
      _id: "vouchers",
    },
  });

  return (
    <>
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

      <div className="container space-y-[120px]">
        <Tip
          icon={<Ticket width={58} height={58} />}
          title="Coupon"
          desc="Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)"
        />

        <InfoDetail {...article} />
        <InfoDetailFooter {...article} />

        <div className="space-y-4">
          <h2 className="text-[20px] font-semibold text-[#475467]">
            Condition of use & consideration
          </h2>
          <Tip
            icon={<CircleCheckBig width={58} height={58} />}
            title="Aplication benefits"
            desc="Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)"
            desc2="Limited to one time per person, passport must be presented."
          />
          <Tip
            icon={<TriangleAlert width={58} height={58} />}
            title="Consideration"
            desc="Limited to one time per person, passport must be presented."
          />
        </div>
      </div>
    </>
  );
};

export default Info;
