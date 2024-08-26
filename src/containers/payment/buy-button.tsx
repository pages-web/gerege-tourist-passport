import { Button } from "@/components/ui/button";
import PaymentMethods from "./payment-methods-dialog";
import PaymentDetail from "./payment-detail-dialog";
import { useAtomValue, useSetAtom } from "jotai";
import {
  handleCompleteAtom,
  invoiceDetailAtom,
  openDetailAtom,
  openMethodsAtom,
  selectedMethodAtom,
} from "@/store/payment.store";
import { useSubscription } from "@apollo/client";
import subscriptions from "@/sdk/graphql/payment/subscriptions";
import { useState } from "react";
import Success from "./success";
import { useRouter } from "next/navigation";
import { usePaymentConfig } from "@/sdk/queries/payment";
import useCreateInvoice from "@/sdk/hooks/payment";
import { configAtom } from "@/store/auth.store";

const BuyButton = () => {
  const setOpenMethods = useSetAtom(openMethodsAtom);
  const setOpenDetails = useSetAtom(openDetailAtom);
  const selectedMethod = useAtomValue(selectedMethodAtom);
  const onCompleted = useSetAtom(handleCompleteAtom);
  const { _id } = useAtomValue(invoiceDetailAtom) || {};
  const { erxesAppToken, name } = useAtomValue(configAtom) || {};

  const handlePay = () => {
    if (selectedMethod) return setOpenDetails(true);
    setOpenMethods(true);
  };

  const { handleCreateInvoice } = useCreateInvoice({
    appToken: erxesAppToken || "",
    posName: name || "",
  });

  useSubscription(subscriptions.invoice, {
    variables: { invoiceId: _id },
    skip: !_id,
    onData(options) {
      const { invoiceUpdated } = options.data.data || {};
      if (invoiceUpdated?.status === "paid") {
        onCompleted();
      }
    },
  });

  return (
    <>
      <Button
        size="lg"
        className="md:h-12 px-6 md:px-8 md:text-[14px] text-[12px]"
        onClick={() => {
          handleCreateInvoice();
          handlePay();
        }}
      >
        Төлбөр төлөх
      </Button>
      <PaymentMethods />
      <PaymentDetail />
      <Success />
    </>
  );
};

export default BuyButton;
