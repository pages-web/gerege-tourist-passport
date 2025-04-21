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

const MobileMenu = () => {
  const t = useTranslations("Header").raw;

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="min-w-8 min-h-8" />
      </SheetTrigger>
      <SheetContent className="w-full bg-white">
        <SheetTitle>
          <h3 className="w-[80%] logo-text text-[20px] font-semibold text-[#6399CE]">
            GEREGE TOURIST PASSPORT LLC
          </h3>
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
            <GeregeButton />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
