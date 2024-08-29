import { IProduct } from "@/types/product.types";
import Link from "next/link";
import Image from "../ui/image";
import { TagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useAtom, useAtomValue, useSetAtom, type Atom } from "jotai";
import { OrderItem } from "@/types/order.types";
import Price from "../price/price";
import { Counter, CounterButton, CounterInput } from "../counter/counter";
import { updateCartAtom } from "@/store/cart.store";
import { useEffect } from "react";

const CartProductCard = ({
  cartItemAtom,
}: {
  cartItemAtom: Atom<OrderItem>;
}) => {
  const { _id, productName, unitPrice, count, productImgUrl, discountAmount } =
    useAtomValue(cartItemAtom);
  const [loading, changeCartItem] = useAtom(updateCartAtom);
  return (
    <div className="relative flex border border-neutral-200 rounded-[4px] shadow-md min-w-[320px] py-4 md:px-4 last:mb-0">
      {/* <div className="relative overflow-hidden rounded-md w-[100px] md:w-[176px]">
        {(discountAmount || 0) > 0 && (
          <div className="absolute top-0 left-0 text-white bg-indigo-600 py-1 pl-1.5 pr-2 text-xs font-medium inline-flex items-center">
            <TagIcon className="mr-1 h-3 w-3" />
            {(
              ((discountAmount || 0) / (unitPrice + (discountAmount || 0))) *
              100
            ).toFixed(1)}
            % Хямдрал
          </div>
        )}
      </div> */}
      <div className="flex justify-between min-w-[180px] flex-1 ">
        <h3 className="text-lg font-medium">{productName}</h3>
        <span className="font-bold md:ml-auto md:order-1 text-sm md:text-lg">
          <Price amount={unitPrice} />
        </span>
      </div>
    </div>
  );
};

export default CartProductCard;
