import { Button } from "@/components/ui/button";
import CheckoutLayout from "../checkout-layout";
import OrderSummary from "@/components/order-summary/order-summary";
import Link from "next/link";
import CartPageContent from "./cart-page-content";

const Cart = () => {
  return (
    <CheckoutLayout title="Your cart">
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <CartPageContent>
          <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit">
            <Button asChild className="w-full ">
              <Link href="/address">Buy</Link>
            </Button>
          </OrderSummary>
        </CartPageContent>
      </div>
    </CheckoutLayout>
  );
};

export default Cart;
