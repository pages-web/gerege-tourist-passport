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
    const interval = setInterval(() => {
      const erxesLauncher = document.getElementsByClassName(
        "erxes-launcher"
      )[0] as HTMLElement;

      const erxeMessengerShown = document.getElementsByClassName(
        "erxes-messenger-shown"
      )[0];

      console.log("erxeMessengerShown", erxeMessengerShown);

      console.log("erxesLauncher", erxesLauncher);

      if (erxesLauncher) {
        erxesLauncher.style.bottom = "290px";
      }

      if (erxeMessengerShown) {
        erxesLauncher.style.bottom = "90px";
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Script
      src="https://geregepassport.app.erxes.io/widgets/build/messengerWidget.bundle.js"
      async
      strategy="lazyOnload"
    />
  );
}
