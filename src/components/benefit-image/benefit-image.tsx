import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { IAttachment } from "@/types";
import Image from "../ui/image";

const BenefitImage = ({ attachment }: { attachment: IAttachment }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full overflow-hidden rounded-xl aspect-video cursor-zoom-in">
          <Image
            src={attachment?.url}
            width={1920}
            height={1080}
            alt={attachment?.name}
            className="w-full h-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-[1000px] pt-10 rounded-xl overflow-y-scroll">
        <Image
          src={attachment?.url}
          width={1920}
          height={1080}
          alt={attachment?.name}
          className="w-full h-full rounded-xl"
        />
      </DialogContent>
    </Dialog>
  );
};
export default BenefitImage;
