"use client";
import { useAtomValue } from "jotai";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/Separator";
import {
  billTypeAtom,
  deliveryInfoAtom,
  registerNumberAtom,
} from "@/store/order.store";

const VerifyAddress = () => {
  const { firstName, lastName, email, phone } =
    useAtomValue(deliveryInfoAtom) || {};
  const billType = useAtomValue(billTypeAtom);
  const registerNumber = useAtomValue(registerNumberAtom);

  return (
    <>
      <div className="py-6">
        <div className="text-black/60 mb-3">
          Захиалагч: {billType === "1" ? "Хувь хүн" : `${registerNumber} -`}
        </div>
        <div className="font-semibold text-sm">
          {firstName} {lastName || ""}
        </div>
        <div>
          {email} {phone}
        </div>
      </div>
    </>
  );
};

export default VerifyAddress;
