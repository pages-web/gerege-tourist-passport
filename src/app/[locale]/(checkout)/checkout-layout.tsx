import { Button } from "@/components/ui/button";
import PrivateRoute from "@/containers/auth/private-route";
import CheckoutRoute from "@/containers/orders/checkout-route";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const CheckoutLayout = ({
  children,
  title,
}: React.PropsWithChildren & {
  title: string;
}) => {
  return (
    <div className="container md:px-40 pb-20 flex-auto min-h-screen">
      <PrivateRoute>
        <CheckoutRoute>
          <div className="flex justify-between md:mt-8 my-6 md:mb-10 items-center">
            <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
          </div>
          {children}
        </CheckoutRoute>
      </PrivateRoute>
    </div>
  );
};

export default CheckoutLayout;
