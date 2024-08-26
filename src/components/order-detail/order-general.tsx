import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '../ui/Separator';
import { format } from 'date-fns';
import Price from '../price/price';
import { useDetail } from './order-detail';
import { useAtomValue } from 'jotai';
import { deliveryItemIdAtom } from '@/store/auth.store';
import { getDeliveryProduct } from '@/store/order.store';

const OrderGeneral = () => {
  const { number, createdAt, totalAmount, items } = useDetail();
  const deliveryProductId = useAtomValue(deliveryItemIdAtom);
  const deliveryProduct = getDeliveryProduct(items, deliveryProductId);

  return (
    <Card>
      <CardHeader className="justify-between flex-row items-center md:py-3 space-y-0 md:space-y-2 mb-2">
        <div>
          <div className="text-white/60 font-medium text-nowrap md:text-[14px] text-[12px]">
            Захиалгын дугаар
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {number}
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/60 font-medium text-nowrap md:text-[14px] text-[12px]">
            Захиалга хийсэн огноо
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {format(createdAt, 'yyyy/MM/dd hh:mm')}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-3 md:py-4 text-sm md:text-base">
        <div className="flex justify-between items-center">
          <span>Барааны дүн</span>
          <Price amount={totalAmount - (deliveryProduct?.unitPrice || 0)} />
        </div>
        <div className="flex justify-between items-center">
          <span>Хүргэлтийн төлбөр</span>
          <Price amount={deliveryProduct?.unitPrice || 0} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="justify-between py-3 md:py-4 font-bold text-base md:text-lg text-nowrap">
        <div>Нийт төлөх дүн</div>
        <Price amount={totalAmount} />
      </CardFooter>
    </Card>
  );
};

export default OrderGeneral;
