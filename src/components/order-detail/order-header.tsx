import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "../ui/Separator";
import { Alert } from "../ui/alert";
import CancelOrder from "@/containers/orders/cancel-order";
import BuyButton from "@/containers/payment/buy-button";
import OrderStatus from "./order-status";
import { ORDER_STATUSES } from "../../lib/constants";
import { useDetail } from "./order-detail";
import GetEbarimt from "@/containers/payment/get-ebarimt";
import { ReactNode } from "react";
import { useAtomValue } from "jotai";
import { deliveryItemIdAtom } from "@/store/auth.store";
import { format } from "date-fns";
import Price from "../price/price";

const OrderHeader = () => {
  const { number, createdAt, totalAmount, items, paidDate, status } =
    useDetail();
  const deliveryProductId = useAtomValue(deliveryItemIdAtom);

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
        <div className="flex justify-between">
          <CancelOrder />
          {!paidDate ? <BuyButton /> : <GetEbarimt />}
        </div>
      </div>

      {/* <Separator />
    <CardFooter className="justify-between py-3 md:py-4 font-bold text-base md:text-lg text-nowrap">
      <div>Нийт төлөх дүн</div>
      <Price amount={totalAmount} />
    </CardFooter> */}
    </div>
  );
};

export default OrderHeader;
