"use client";

import { useEffect, useState } from "react";

const Test = ({ content }: { content: any }) => {
  const [desc, setDesc] = useState("");

  const getInnerHTMLFromHTMLString = (htmlString: any, selector: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const element = doc.querySelector(selector);
    return element.innerHTML;
  };

  useEffect(() => {
    setDesc(getInnerHTMLFromHTMLString(content, "p"));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: desc }}></div>;
};
export default Test;
