import CategoryItem from "@/components/category-item/category-item";
import { kbCategoryDetail } from "@/sdk/queries/kb";
import { List, Map } from "lucide-react";
import LoyaltyCardDetail from "./loyalty-card-detail";
import { IPageProps } from "@/types";
import ToggleMapList from "./toggle-map-list";
import GoogleMap from "./google-map";
import LoyaltyCardDetailHowToBuy from "./loyalty-card-detail-howtobuy";
import Heading from "@/components/heading/heading";

const categories = ["hotel", "restaurant", "museum", "how to buy?"];

const LoyaltyCard = async ({
  searchParams,
}: {
  searchParams?: IPageProps["searchParams"];
}) => {
  const { category } = await kbCategoryDetail({
    variables: {
      _id:
        searchParams?.cg === "how to buy?"
          ? ""
          : searchParams?.cg
          ? searchParams.cg
          : "hotel",
    },
  });

  return (
    <div className="flex flex-col">
      <Heading
        title={`Receive Special Offers with our "U Point" Loyalty Card.`}
        desc="In partnership with over 60 Mongolian top brands"
        className="w-full text-center mb-12"
      />
      <div className="flex flex-wrap xl:flex-nowrap gap-3">
        <div className="w-full border">
          <div className="flex md:flex-row flex-col justify-between gap-2">
            <div className="w-full flex overflow-x-scroll md:overflow-x-hidden">
              {categories.map((category, index) => {
                return <CategoryItem title={category} isHome key={index} />;
              })}
            </div>
            <ToggleMapList />
          </div>
          {searchParams?.cg !== "how to buy?" ? (
            <LoyaltyCardDetail {...category} />
          ) : (
            <LoyaltyCardDetailHowToBuy />
          )}
        </div>
        <GoogleMap />
      </div>
    </div>
  );
};
export default LoyaltyCard;
