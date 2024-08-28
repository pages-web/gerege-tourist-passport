import { IArticle } from "@/types/kb.types";
import React from "react";
import GeregeButton from "../gerege-button/gerege-button";
import InfoCarousel from "../info-carousel/info-carousel";
import Test from "../test/test";

const InfoDetail = (article: IArticle) => {
  const { title, attachments, summary, content } = article;

  return (
    <div className="flex flex-col items-center space-y-9">
      <h3 className="text-[30px] font-semibold uppercase text-[#1D2939]">
        {title}
      </h3>
      <div className="flex gap-20">
        <div className="space-y-5">
          <p>{summary}</p>
          <Test content={content} />
          <GeregeButton />
        </div>
        <div>
          <InfoCarousel attachments={attachments} />
        </div>
      </div>
    </div>
  );
};
export default InfoDetail;
