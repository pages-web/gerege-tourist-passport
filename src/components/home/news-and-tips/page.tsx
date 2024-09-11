import { kbCategoryDetail } from "@/sdk/queries/kb";
import { useTranslations } from "next-intl";
import NewsCarousel from "./news-carousel";
import Heading from "@/components/heading/heading";

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
      <Heading
        title="News and Tips"
        desc="Here's many things you can do in Ulaanbaatar for free and others"
      />
      {/* {t("title")} */}
      {/* {t("description")} */}
      <NewsCarousel {...category} />
    </div>
  );
};
export default NewsAndTips;
