"use client";
import { usePaymentConfig } from "@/sdk/queries/payment";
import { RadioGroup } from "@/components/ui/radio-group";
import PaymentType from "./payment-type";
import { Loading } from "@/components/ui/loading";
import { useAtom, useAtomValue } from "jotai";
import { handleMethodAtom, invoiceDetailAtom } from "@/store/payment.store";
import useCreateInvoice from "@/sdk/hooks/payment";
import { configAtom } from "@/store/auth.store";
import { useDetail } from "@/components/order-detail/order-detail";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const PaymentMethods = () => {
  const t = useTranslations("Welcome");
  const { erxesAppToken, name } = useAtomValue(configAtom) || {};
  const { _id, totalAmount } = useDetail();
  const { contentTypeId } = useAtomValue(invoiceDetailAtom) || {};
  const {
    handleCreateInvoice,
    loading: creatingInvoice,
    data,
  } = useCreateInvoice({
    appToken: erxesAppToken || "",
    posName: name || "",
  });
  const { loading, payments } = usePaymentConfig(
    () => _id !== contentTypeId && handleCreateInvoice()
  );
  const [selectedPayment, setSelectedPayment] = useAtom(handleMethodAtom);

  useEffect(() => {
    if (payments.length === 1 && !creatingInvoice && data?._id) {
      setSelectedPayment(payments[1]._id);
    }
  }, [payments, creatingInvoice, data?._id]);

  return (
    <>
      <h2 className="font-medium md:text-4xl text-black mb-4">
        {t("payment")}
        <p></p>
        {t("payment2")}
      </h2>
      {loading || creatingInvoice ? (
        <Loading className="pt-32" />
      ) : (
        <RadioGroup
          value={selectedPayment}
          onValueChange={(value) => setSelectedPayment(value)}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {payments.map(({ kind, _id, name }) => (
                <PaymentType
                  selected={selectedPayment === kind}
                  kind={kind}
                  _id={_id}
                  name={name}
                  key={_id}
                />
              ))}
            </div>
          </div>
        </RadioGroup>
      )}
    </>
  );
};

export default PaymentMethods;
