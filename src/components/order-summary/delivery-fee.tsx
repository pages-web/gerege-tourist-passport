"use client";
import { useAtomValue } from "jotai";
import Price from "../price/price";
import { deliveryItemAtom } from "@/store/order.store";

const DeliveryFee = () => {
  const deliveryProduct = useAtomValue(deliveryItemAtom);
  return (
    <>
      <div className="flex justify-between items-start">
        <span>Захиалгын төлбөр</span>
        <Price amount={55} />
      </div>
    </>
  );
};

export default DeliveryFee;
