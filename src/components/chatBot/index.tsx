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
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
          erxesMessenger.style.bottom = "780px";
          erxesMessenger.style.left = "0px";
          erxesMessenger.style.right = "20px";
        } else if (screenWidth >= 768 && screenWidth < 900) {
          erxesMessenger.style.bottom = "200px";
          erxesMessenger.style.left = "20px";
          erxesMessenger.style.right = "auto";
        } else if (screenWidth >= 900 && screenWidth < 1300) {
          erxesMessenger.style.bottom = "370px";
          erxesMessenger.style.left = "30px";
          erxesMessenger.style.right = "auto";
        } else {
          erxesMessenger.style.bottom = "540px";
          erxesMessenger.style.left = "auto";
          erxesMessenger.style.right = "20px";
        }

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
