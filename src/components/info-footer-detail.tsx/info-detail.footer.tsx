"use client";

import { IArticle } from "@/types/kb.types";
import { useEffect, useState } from "react";

const InfoDetailFooter = (article: IArticle) => {
  const [desc, setDesc] = useState([]);
  const [test, setTest] = useState([]);
  const content = article.content;

  const getInnerHTMLFromHTMLString = (htmlString: any, selector: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const elements = doc.querySelectorAll(selector);
    for (const value of elements) {
    }
  };

  useEffect(() => {
    getInnerHTMLFromHTMLString(content, "p");
  }, []);

  // return <div className="flex justify-between">hello world</div>;
};
export default InfoDetailFooter;
