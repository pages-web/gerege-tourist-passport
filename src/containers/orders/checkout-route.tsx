"use client";

import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading";
import { initialLoadingOrderAtom } from "@/store/order.store";
import { useAtomValue } from "jotai";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const CheckoutRoute = ({ children }: React.PropsWithChildren) => {
  const loadingOrder = useAtomValue(initialLoadingOrderAtom);

  if (loadingOrder)
    return (
      <>
        <div className="flex items-center justify-center py-40 col-span-7 mb-10 md:mb-0">
          <LoadingIcon />
        </div>
      </>
    );

  return <>{children}</>;
};

export default CheckoutRoute;
