import CartTotal from "../cart/cart-total";
import { useDetail } from "../order-detail/order-detail";
import Price from "../price/price";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/Separator";
import DeliveryFee from "./delivery-fee";

const OrderSummary = ({
  className,
  children,
  content,
}: React.PropsWithChildren & {
  className?: string;
  content?: React.ReactNode;
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex-row space-y-0 justify-between items-center md:py-4 mb-4">
        <div className="font-semibold text-[12px] md:text-[16px] border border-[#AFEAFF] bg-[#AFEAFF]/30 text-[#0087FF] p-[10px] rounded-[12px]">
          $1 from every purchase is donated to support children with special
          needs at the 10th Kindergarten.
        </div>
      </CardHeader>
      <CardContent className="py-0 md:py-0 space-y-2 mb-2">
        {!!content && (
          <div>
            <Separator />
            <div className="py-3 space-y-1">{content}</div>
            <Separator />
          </div>
        )}
        <DeliveryFee />
      </CardContent>
      <CardFooter className="flex-col gap-4 md:pb-6 md:pt-3">
        <Separator />
        <div className="text-lg md:text-xl font-bold flex justify-between gap-x-2 w-full">
          <p>Total: </p>
          <CartTotal />
        </div>
        {children}
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
