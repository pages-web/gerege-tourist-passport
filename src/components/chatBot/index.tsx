"use client";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Chat() {
  useEffect(() => {
    (window as any).erxesSettings = {
      messenger: {
        brand_id: "QutPmz",
        appearance: {
          position: "right",
          style: {
            bottom: "100px",
          },
        },
      },
    };
    const interval = setInterval(() => {
      const erxesMessenger = document.getElementById(
        "erxes-messenger-container"
      );
      if (erxesMessenger) {
        erxesMessenger.style.bottom = "270px";
        erxesMessenger.style.left = "10px";
        clearInterval(interval);
      }
    }, 500);

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
