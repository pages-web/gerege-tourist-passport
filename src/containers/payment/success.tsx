import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { refetchOrderDetailAtom, showSuccessAtom } from "@/store/payment.store";
import { useAtom, useSetAtom } from "jotai";
import { CheckIcon } from "lucide-react";

const Success = () => {
  const setRefetch = useSetAtom(refetchOrderDetailAtom);
  const [showSuccess, setShowSuccess] = useAtom(showSuccessAtom);
  return (
    <Dialog open={showSuccess}>
      <DialogContent>
        <div className="flex flex-col items-center py-6">
          <div className="h-16 w-16 rounded-full bg-green-700 flex items-center justify-center">
            <CheckIcon className="h-10 w-10 stroke-white " strokeWidth={2.5} />
          </div>
          <div className="md:text-xl font-bold pt-6 text-center text-green">
            Таны төлбөр амжилттай төлөгдлөө
          </div>
          <div className="text-neutral-500 pt-2 font-medium text-center">
            Манайхаар үйлчлүүлсэн танд баярлалаа.
          </div>
          <Button
            className="px-12 mt-4"
            variant="outline"
            size="lg"
            onClick={() => {
              setRefetch(true);
              setShowSuccess(false);
            }}
          >
            Дуусгах
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Success;
