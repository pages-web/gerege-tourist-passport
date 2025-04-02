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
      <SheetContent className="w-[90%] sm:w-[540px] bg-white ">
        <SheetTitle>
          <h3 className="w-[80%] logo-text text-[20px] font-semibold text-[#034EA2]">
            GEREGE TOURIST PASSPORT LLC
          </h3>
        </SheetTitle>

        <Separator className="my-3" />

        <div className="flex flex-col items-end gap-3">
          {t("texts").map((item: any, index: number) => (
            <SheetClose key={index}>
              <Link
                href={item.href}
                className="text-[20px] font-semibold text-gray-600"
              >
                {item.name}
              </Link>
            </SheetClose>
          ))}
          <SheetClose>
            <GeregeButton />
          </SheetClose>

          <Separator />

          <CurrentUser />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
