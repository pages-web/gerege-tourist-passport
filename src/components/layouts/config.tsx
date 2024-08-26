"use client";
import { useCurrentUser } from "@/sdk/queries/auth.client";
import { configAtom } from "@/store/auth.store";
import { IConfig } from "@/types/auth.types";
import { useSetAtom } from "jotai";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const ConfigProvider = ({
  children,
  config,
}: React.PropsWithChildren & { config: IConfig }) => {
  const setConfig = useSetAtom(configAtom);
  const user = useCurrentUser();
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

    if (!user) {
      redirect("/");
    }
  }, []);

  return <>{children}</>;
};

export default ConfigProvider;
