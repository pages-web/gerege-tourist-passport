import { useDetail } from "@/components/order-detail/order-detail";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading";
import { useCancelOrder } from "@/sdk/hooks/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CancelOrder() {
  const { _id, number } = useDetail();
  const { cancel, loading } = useCancelOrder();
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="md:h-12 py-[10px]  md:px-8 md:text-[14px] text-[12px]"
        >
          Захиалга цуцлах
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Та {number} дугаартай захиалгыг цуцлахдаа итгэлтэй байна уу?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Энэхүү захиалга бүр мөсөн устах бөгөөд дахин сэргээх боломжгүй болно
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Буцах</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              cancel({
                variables: { _id },
                onCompleted() {
                  toast.success(
                    `${number} дугаартай захиалга амжилттай цуцлагдлаа`
                  );
                  router.replace("/profile/orders?refetch=true");
                },
              })
            }
            disabled={loading}
          >
            {loading && <LoadingIcon />}
            Захиалга цуцлах
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default CancelOrder;
