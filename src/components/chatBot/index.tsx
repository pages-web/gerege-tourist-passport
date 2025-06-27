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

    const adjustLauncherPosition = () => {
      const launcher = document.querySelector(
        ".erxes-launcher"
      ) as HTMLElement | null;
      const isMessengerShown = document.querySelector(".erxes-messenger-shown");

      if (launcher) {
        launcher.style.bottom = isMessengerShown ? "90px" : "20px";
      }
    };

    const observer = new MutationObserver(() => {
      adjustLauncherPosition();
    });
    const interval = setInterval(() => {
      const targetNode = document.body;
      const launcherExists = document.querySelector(".erxes-launcher");

      if (launcherExists) {
        observer.observe(targetNode, {
          childList: true,
          subtree: true,
        });

        adjustLauncherPosition();
        clearInterval(interval);
      }
    }, 10);

    return () => {
      observer.disconnect();
      clearInterval(interval);
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
