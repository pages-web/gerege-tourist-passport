import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";
import { Link } from "@/navigation";
import { Separator } from "../ui/Separator";
import GeregeButton from "../gerege-button/gerege-button";
import { useTranslations } from "next-intl";
import CurrentUser from "@/containers/auth/current-user";
import Image from "../ui/image";

const MobileMenu = () => {
  const t = useTranslations("Header").raw;

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="min-w-8 min-h-8" />
      </SheetTrigger>
      <SheetContent className="w-full bg-white">
        <SheetTitle>
          <Link href={"/"}>
            <div className="w-32 lg:w-40">
              <Image
                src="/image/logo.png"
                width={2010}
                height={1003}
                className="w-full h-full"
                alt="logo"
              />
            </div>
          </Link>
        </SheetTitle>

        <Separator className="my-6" />

        <div className="flex flex-col gap-6">
          {t("texts").map((item: any, index: number) => (
            <>
              <Link
                key={index}
                href={item.href}
                className="text-[20px] font-semibold text-gray-600"
              >
                <SheetClose>{item.name}</SheetClose>
              </Link>

              <Separator className="w-full" />
            </>
          ))}
          <SheetClose>
            <GeregeButton className="w-full text-lg"/>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
