"use client";
import { useAtomValue, useStore } from "jotai";
import Price from "../price/price";
import { deliveryItemAtom } from "@/store/order.store";
import { getProductDetail } from "@/sdk/queries/products";

const DeliveryFee = () => {
  const deliveryProduct = useAtomValue(deliveryItemAtom);
  return (
    <>
      <div className="flex justify-between items-start">
        <span>GEREGE TOUR CARD</span>
        <Price amount={186000} />
      </div>
    </>
  );
};

export default DeliveryFee;
