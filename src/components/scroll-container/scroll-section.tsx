"use client";

import { usePathname } from "@/navigation";
import { PropsWithChildren } from "react";

const ScrollSection = ({
  children,
  isFooter,
  itemsEnd,
  bg,
  id,
}: PropsWithChildren & {
  isFooter?: boolean;
  id: string;
  itemsEnd?: boolean;
  bg?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div
      id={id}
      className={`lg:h-[110vh] ${id !== "home" ? "py-10" : ""} ${
        bg ? "" : "bg-slate-50"
      }  flex ${
        isFooter
          ? "items-end"
          : itemsEnd
          ? "h-md:items-center items-end"
          : "items-center"
      } ${pathname === "/" ? "xl:snap-start" : ""}`}
    >
      {children}
    </div>
  );
};
export default ScrollSection;
