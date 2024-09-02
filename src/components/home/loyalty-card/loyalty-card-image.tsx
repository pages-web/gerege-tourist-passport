import Image from "@/components/ui/image";
import { IArticle } from "@/types/kb.types";
import { useSearchParams } from "next/navigation";

const LoyaltyCardImage = ({
  index,
  maxLength,
  article,
  slicedLength,
}: {
  index: number;
  maxLength: number;
  article: IArticle;
  slicedLength: number;
}) => {
  const { image, _id } = article;
  const articleSearch = useSearchParams().get("articleId");

  return (
    <div
      className={`p-3 relative overflow-hidden border w-full h-full min-h-[150px] md:w-[200px] md:h-[200px] flex justify-center items-center z-40 ${
        articleSearch === _id &&
        "shadow-inner-custom border-[#0087FF] shadow-[#0087FF]/50"
      }`}
    >
      <Image
        alt={_id}
        src={image?.url || ""}
        width={100}
        height={100}
        quality={100}
        className="md:w-fit z-10"
      />
      {index === slicedLength - 1 && maxLength - slicedLength !== 0 && (
        <div className="z-30 text-[14px] md:text-[18px] font-medium flex justify-center items-center absolute uppercase w-full h-full bg-black/50 text-white">
          <span>+{maxLength - slicedLength} more</span>
        </div>
      )}
    </div>
  );
};
export default LoyaltyCardImage;
