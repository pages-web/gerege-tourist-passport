"use client";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Chat() {
  useEffect(() => {
    (window as any).erxesSettings = {
      messenger: {
        brand_id: "QutPmz",
      },
    };
  }, []);
  return (
    <Script
      src="https://geregepassport.app.erxes.io/widgets/build/messengerWidget.bundle.js"
      async
      strategy="lazyOnload"
    />
  );
}
