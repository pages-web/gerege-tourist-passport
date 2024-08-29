import { kbCategoryDetail } from "@/sdk/queries/kb";
import { useTranslations } from "next-intl";
import NewsCarousel from "./news-carousel";

const NewsAndTips = async () => {
  // const t = useTranslations("NewsAndTips");
  const { category } = await kbCategoryDetail({
    variables: {
      _id: "news",
    },
  });

  // if (!category) return null;

  return (
    <div
      id="news-and-tips"
      className="w-full overflow-hidden flex flex-col justify-between gap-14"
    >
      <div className="flex flex-col gap-2 items-center justify-between m-auto">
        <div className="text-gray-800 md:text-[30px] text-[20px] font-bold">
          {/* {t("title")} */}
        </div>
        <div className="text-gray-600 md:text-[18px] text-[14px] font-normal">
          {/* {t("description")} */}
        </div>
      </div>
      <NewsCarousel {...category} />
    </div>
  );
};
export default NewsAndTips;
