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
}: {
  geregeproduct: IProduct;
  className?: string;
  title?: string;
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

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#6399CE] text-white w-fit ${className}`}
    >
      <Store className="mr-2 w-6 h-6" /> {title || "Gerege Buy for 55$"}
    </Button>
  );
};

export default GeregeButtonAdd;
