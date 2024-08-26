import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/Separator";
import { useDetail } from "./order-detail";

const OrderUser = () => {
  const { deliveryInfo, billType, registerNumber } = useDetail();
  const { lastName, firstName, phone, email } = deliveryInfo || {};

  return (
    <Card>
      <CardHeader className="md:py-4">
        <CardTitle className="text-lg font-semibold mb-2">
          Захиалагчийн мэдээлэл
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center justify-between text-sm flex-wrap md:flex-nowrap gap-4 md:gap-0 py-4 md:py-6">
        <div>
          <div className="text-white/60">Овог</div>
          <div className="font-medium">{lastName || "-"}</div>
        </div>
        <div>
          <div className="text-white/60">Нэр</div>
          <div className="font-medium">{firstName}</div>
        </div>
        <div>
          <div className="text-white/60">Утас</div>
          <div className="font-medium">{phone}</div>
        </div>
        <div>
          <div className="text-white/60">Цахим хаяг</div>
          <div className="font-medium">{email}</div>
        </div>
        <div>
          <div className="text-white/60">
            {billType === "3" ? "Байгуулга" : "Хувь хүн"}
          </div>
          <div className="font-medium">
            {billType === "3" ? ` (${registerNumber})` : "-"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderUser;
