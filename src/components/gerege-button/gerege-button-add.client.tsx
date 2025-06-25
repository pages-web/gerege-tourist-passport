"use client";

import { IProduct } from "@/types/product.types";
import { Button } from "../ui/button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { cartSheetAtom } from "@/store";
import {
  addToCartAtom,
  cartItemAtomAtoms,
  cartTotalAtom,
  changeCartItem,
} from "@/store/cart.store";
import { usePossibleQuantity } from "@/sdk/hooks/cart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Store } from "lucide-react";
import { currentUserAtom } from "@/store/auth.store";

const GeregeButtonAdd = ({
  geregeproduct,
  className,
  title,
  isIcon,
}: {
  geregeproduct: IProduct;
  className?: string;
  title?: string;
  isIcon?: boolean;
}) => {
  const [loading, addToCart] = useAtom(addToCartAtom);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const openCart = useSetAtom(cartSheetAtom);
  const currentUser = useAtomValue(currentUserAtom);
  const { checkRemainder, possibleQuantity } =
    usePossibleQuantity(geregeproduct);

  useEffect(() => {
    if (clicked) {
      if (!loading) {
        toast.success("Product added to cart", {
          description: `${
            geregeproduct?.name
          } (${geregeproduct?.unitPrice?.toLocaleString()})`,
          action: {
            label: "View",

            onClick: () => {
              toast.dismiss();
            },
          },
        });
      }
      openCart(true);
      setClicked(false);
    }
  }, [clicked, loading]);

  const handleClick = () => {
    if (!checkRemainder || possibleQuantity > 0) {
      addToCart({ ...geregeproduct, count: 1 });
      setClicked(true);
    }
    if (!currentUser) {
      router.push("/login");
    } else {
      router.push("/cart");
    }
  };

  if (isIcon)
    return (
      <Button
        onClick={handleClick}
        className={`bg-[#6399CE] px-2 py-1 lg:px-4 lg:py-2 text-white md:w-[57px] w-10 md:h-[57px] h-10 font-bold md:rounded-2xl rounded-xl ${className}`}
      >
        <Store className="w-full h-full" />
      </Button>
    );

  return (
    <Button
      onClick={handleClick}
      className={`relative overflow-hidden [#6399CE] text-white w-fit font-bold text-lg px-6 py-3 h-14 rounded-xl shadow-lg transition-all duration-200 ease-in-out after:content-[''] after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-white/20 after:transition-all after:duration-[550ms] after:ease-custom hover:after:left-[120%] ${className}`}
    >
      <Store className="mr-2 w-6 h-6" /> {title || "Gerege Buy for 55$"}
    </Button>
  );
};

export default GeregeButtonAdd;
