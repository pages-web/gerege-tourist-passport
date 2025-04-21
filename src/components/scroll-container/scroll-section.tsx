"use client";

import { usePathname } from "@/navigation";
import { PropsWithChildren } from "react";

const ScrollSection = ({
  children,
  isFooter,
  id,
}: PropsWithChildren & { isFooter?: boolean; id?: string }) => {
  const pathname = usePathname();

  return (
    <div
      id={id}
      className={`lg:h-[110vh] scroll-mt-32 lg:scroll-mt-20  flex  ${
        isFooter ? "items-end" : "items-center"
      } ${pathname === "/" ? "min-[1200px]:snap-start" : ""}`}
    >
      {children}
    </div>
  );
};
export default ScrollSection;
