"use client";

import { IProduct } from "@/types/product.types";
import { Button } from "../ui/button";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { cartSheetAtom } from "@/store";
import { addToCartAtom, cartTotalAtom } from "@/store/cart.store";
import { usePossibleQuantity } from "@/sdk/hooks/cart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Store } from "lucide-react";

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
  const [total] = useAtom(cartTotalAtom);
  const router = useRouter();
  const openCart = useSetAtom(cartSheetAtom);
  const { checkRemainder, possibleQuantity, disableActions } =
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
      if (total < 186957) {
        addToCart({ ...geregeproduct, count: 1 });
      } else {
        addToCart({ ...geregeproduct, count: 0 });
      }
      setClicked(true);
    }
    router.push("/cart");
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#0087FF] text-white w-fit ${className}`}
    >
      <Store className="mr-2 w-6 h-6" /> {title || "Gerege Buy for 55$"}
    </Button>
  );
};

export default GeregeButtonAdd;
