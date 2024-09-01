import CategoryItem from "@/components/category-item/category-item";
import { kbCategoryDetail } from "@/sdk/queries/kb";
import { List, Map } from "lucide-react";

const categories = ["hotel", "restaurant", "museum", "how to buy?"];

const LoyaltyCard = async () => {
  const { category } = await kbCategoryDetail({
    variables: {
      _id: "vouchers",
    },
  });

  return (
    <div className="w-full border ">
      <div className="flex justify-between">
        <div className="flex">
          {categories.map((category, index) => {
            return <CategoryItem title={category} isHome key={index} />;
          })}
        </div>
        <div className="flex">
          <CategoryItem
            title={"List"}
            isHome
            icon={<List className="w-5 h-5" />}
          />
          <CategoryItem
            title={"Map"}
            isHome
            icon={<Map className="w-5 h-5" />}
          />
        </div>
      </div>
      <div className="p-6">
        <h2></h2>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default LoyaltyCard;
