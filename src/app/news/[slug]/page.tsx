import NewsAuthor from "@/components/news-author/news-author";
import { getKbArticleDetail } from "@/sdk/queries/kb";
import { IPageProps } from "@/types";

const News = async ({ params }: IPageProps) => {
  const { article } = await getKbArticleDetail({
    variables: {
      id: params.slug,
    },
  });

  return (
    <div className="min-h-screen container mt-16 space-y-10">
      <h1 className="font-bold text-[50px] text-[#1D2939]">{article.title}</h1>
      <div className="flex flex-col lg:flex-row gap-20 justify-between ">
        <NewsAuthor {...article} />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="max-w-[80%]"
        ></div>
      </div>
    </div>
  );
};

export default News;
