"use client";
import { hexToHsl } from "@/lib/utils";
import { configAtom } from "@/store/auth.store";
import { IConfig } from "@/types/auth.types";
import { useSetAtom } from "jotai";
import { useEffect, useLayoutEffect } from "react";
import AOS from "aos";

const ConfigProvider = ({
  children,
  config,
}: React.PropsWithChildren & { config: IConfig }) => {
  const setConfig = useSetAtom(configAtom);
  const { deliveryConfig, erxesAppToken, paymentIds, name, isCheckRemainder } =
    config || {};

  useLayoutEffect(() => {
    setConfig({
      deliveryConfig,
      erxesAppToken,
      paymentIds,
      name,
      isCheckRemainder,
    });
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Easing options
      // once: true, // Whether animation should happen only once
      delay: 100,
    });
  }, []);

  return <>{children}</>;
};

export default ConfigProvider;
