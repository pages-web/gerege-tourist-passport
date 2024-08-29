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

const OrderHeader = () => {
  const { status, paidDate } = useDetail();
  console.log(paidDate);
  return (
    <Card>
      <CardHeader className="justify-between flex-row items-center md:py-5 gap-1 md:gap-0">
        <h3 className="text-base text-nowrap md:text-xl font-semibold mb-2">
          Payment detail
        </h3>
        <div className="text-sm font-medium w-full md:w-auto text-right"></div>
      </CardHeader>
      <Separator />
      <CardContent className="px-2">
        <h4 className="text-lg md:text-xl font-medium text-center md:mt-5">
          <OrderStatus />
        </h4>
        {status === ORDER_STATUSES.NEW && !paidDate && (
          <Alert
            variant="warning"
            className="md:font-medium text-black text-center"
          >
            Төлбөр төлөгдсөний дараа таны захиалга баталгаажихыг анхаарна уу!
          </Alert>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="justify-between pt-4 md:py-4 gap-2">
        <CancelOrder />
        {!paidDate ? <BuyButton /> : <GetEbarimt />}
      </CardFooter>
    </Card>
  );
};

export default OrderHeader;
