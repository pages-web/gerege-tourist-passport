import { DialogHeader } from "@/components/ui/Dialog";
import { handleMethodAtom, invoiceDetailAtom } from "@/store/payment.store";
import { useAtomValue } from "jotai";
import Image from "@/components/ui/image";
import { usePaymentConfig } from "@/sdk/queries/payment";
import { IPayment } from "@/types/payment.types";
import { Loading } from "@/components/ui/loading";
import { useEffect, useRef, useState } from "react";
import QrDetail, { QrContainer } from "./qr-detail";
import PhoneDetail from "./phone-detail";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "@apollo/client";
import { mutations } from "@/sdk/graphql/payment";

const QR_PAYMENTS = ["qpay", "monpay", "pocket", "qpayQuickqr"];
const PHONE_PAYMENTS = ["socialpay", "storepay"];

const PaymentDetail = () => {
  const selectedMethod = useAtomValue(handleMethodAtom);
  const invoiceDetail = useAtomValue(invoiceDetailAtom);
  const { payments, loading } = usePaymentConfig();

  const prevInvoiceDetailRef = useRef(invoiceDetail);

  const kind = payments?.find((p: IPayment) => p._id === selectedMethod)?.kind;
  const isQr = QR_PAYMENTS.includes(kind || "");
  const isPhone = PHONE_PAYMENTS.includes(kind || "");

  const [addTransaction, { loading: addingTransaction, reset, data }] =
    useMutation(mutations.addTransaction);

  useEffect(() => {
    if (selectedMethod && invoiceDetail && !isPhone) {
      reset();

      addTransaction({
        variables: {
          invoiceId: invoiceDetail._id,
          paymentId: selectedMethod,
          amount: invoiceDetail.amount,
        },
      });
      if (prevInvoiceDetailRef.current?._id !== invoiceDetail?._id) {
        addTransaction({
          variables: {
            invoiceId: invoiceDetail._id,
            paymentId: selectedMethod,
            amount: invoiceDetail.amount,
          },
        });
      }
    }
    prevInvoiceDetailRef.current = invoiceDetail;
  }, [selectedMethod, invoiceDetail]);

  if (loading) return <Loading className="py-32" />;

  const { _id, status, response } = data?.paymentTransactionsAdd || {};

  return (
    <>
      <DialogHeader className="flex-row gap-4 items-center justify-between my-2 md:mt-0">
        <h3 className="text-[#D92D20] text-[18px] font-medium">
          Don't close until pay
        </h3>
      </DialogHeader>
      {isQr &&
        (addingTransaction ? (
          <QrContainer loading />
        ) : (
          (!!response?.qrData || (isQr && response?.error)) && (
            <QrDetail
              errorDescription={response?.error}
              status={status}
              qrCode={response?.qrData}
              urls={response?.urls}
              id={_id}
            />
          )
        ))}
      {isPhone && (
        <PhoneDetail
          kind={kind}
          loading={loading}
          handleCreate={(values) =>
            addTransaction({
              variables: {
                invoiceId: invoiceDetail?._id,
                paymentId: selectedMethod,
                amount: invoiceDetail?.amount,
                details: { phone: values?.phone },
              },
            })
          }
          data={data}
        />
      )}

      {addingTransaction && (
        <Loading className="absolute inset-0 bg-background/40" />
      )}
    </>
  );
};

export default PaymentDetail;
