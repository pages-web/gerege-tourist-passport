import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "../ui/Separator";
import { format } from "date-fns";
import Price from "../price/price";
import { useDetail } from "./order-detail";
import { useAtomValue } from "jotai";
import { deliveryItemIdAtom } from "@/store/auth.store";
import { getDeliveryProduct } from "@/store/order.store";
import { title } from "process";
import { ReactNode } from "react";
import { transaction } from "@/sdk/graphql/payment/subscriptions";

const OrderContent = () => {
  const { number, createdAt, totalAmount, items, paidDate } = useDetail();
  const deliveryProductId = useAtomValue(deliveryItemIdAtom);
  const deliveryProduct = getDeliveryProduct(items, deliveryProductId);

  const Title = ({ title }: { title: string }) => {
    return (
      <h3 className="text-[18px] text-[#1D2939] font-semibold">{title}</h3>
    );
  };
  const Content = ({ text }: { text?: ReactNode }) => {
    return <span className="text-[#475467] text-[18px]">{text}</span>;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[#1D2939] text-[20px] font-semibold">
          Payment detail
        </h2>
        <h2 className="text-[#1D2939] text-[20px] font-semibold">
          {format(createdAt, "yyyy/MM/dd hh:mm")}
        </h2>
      </div>
      <Separator className="bg-[#AFEAFF]" />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Title title="Payment:" />
          <Content text={items[0].productName} />
        </div>
        <div className="flex justify-between items-center">
          <Title title="Price:" />
          <Content text={<Price amount={totalAmount} />} />
        </div>
        {paidDate && (
          <div className="flex justify-between items-center">
            <Title title="Link:" />
            <Content text="i'm code" />
          </div>
        )}
      </div>

      {/* <Separator />
      <CardFooter className="justify-between py-3 md:py-4 font-bold text-base md:text-lg text-nowrap">
        <div>Нийт төлөх дүн</div>
        <Price amount={totalAmount} />
      </CardFooter> */}
    </div>
  );
};

export default OrderContent;
