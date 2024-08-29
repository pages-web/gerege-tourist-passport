import { IArticle } from "@/types/kb.types";
import { Facebook, Instagram } from "@mui/icons-material";
import { formatDate } from "date-fns";
import Link from "next/link";

const NewsAuthor = (article: IArticle) => {
  const TitleText = ({ title, text }: { title: string; text: string }) => {
    return (
      <div className="space-y-2">
        <h4 className="text-[#1D2939]">{title}</h4>
        <span className="text-[#0087FF]">{text}</span>
      </div>
    );
  };
  function FormatDate(date: string) {
    const currDate = new Date(date);
    return `${currDate.getDate() < 10 ? "0" : ""}${currDate.getDate()}-${
      currDate.getMonth() + 1 < 10 ? "0" : ""
    }${currDate.getMonth() + 1}-${currDate.getFullYear()}`;
  }

  return (
    <div className="sticky top-28 space-y-8">
      <TitleText
        title={"Written by:"}
        text={article.createdUser.details.fullName}
      />
      <p className="text-[#1D2939]">{FormatDate(article.modifiedDate)}</p>
      <div className="flex flex-col gap-2">
        <Link href={"https://www.facebook.com/profile.php?id=61559305625217"}>
          <Facebook className="w-8 h-8 text-[#1D2939] hover:text-[#0087FF]" />
        </Link>
        <Link href={"https://www.instagram.com/gerege.mn/"}>
          <Instagram className="w-8 h-8 text-[#1D2939] hover:text-[#dd2a7b]" />
        </Link>
      </div>
    </div>
  );
};
export default NewsAuthor;
