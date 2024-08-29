"use client";
import { useAtomValue, useStore } from "jotai";
import Price from "../price/price";
import { deliveryItemAtom } from "@/store/order.store";
import { getProductDetail } from "@/sdk/queries/products";
import { cartTotalAtom } from "@/store/cart.store";

const DeliveryFee = () => {
  const totalAmount = useAtomValue(cartTotalAtom);
  return (
    <>
      <div className="flex justify-between items-start">
        <span>GEREGE TOUR CARD</span>
        <Price amount={totalAmount || 0} />
      </div>
    </>
  );
};

export default DeliveryFee;
