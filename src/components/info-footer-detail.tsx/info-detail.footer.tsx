"use client";

import { IArticle } from "@/types/kb.types";
import { useEffect, useState } from "react";

const InfoDetailFooter = (article: IArticle) => {
  const [contact, setContact] = useState();
  const [shopping, setShopping] = useState();
  const [services, setServices] = useState();
  const [test, setTest] = useState();
  const content = article.content;

  const getInnerHTMLFromHTMLString = (htmlString: any, selector: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const elements = doc.querySelectorAll(selector);
    setContact(elements[1] && elements[1].innerHTML);
    setShopping(elements[2] && elements[2].innerHTML);
    setServices(elements[3] && elements[3].innerHTML);
  };

  useEffect(() => {
    getInnerHTMLFromHTMLString(content, "p");
  }, []);

  return (
    <>
      {contact && shopping && services ? (
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#0087FF]">Contact</h2>
            <div dangerouslySetInnerHTML={{ __html: contact! }}></div>
          </div>
          <div>
            <h2 className="text-[#0087FF]">Contact</h2>
            <div dangerouslySetInnerHTML={{ __html: shopping! }}></div>
          </div>
          <div>
            <h2 className="text-[#0087FF]">Contact</h2>
            <div dangerouslySetInnerHTML={{ __html: services! }}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default InfoDetailFooter;
