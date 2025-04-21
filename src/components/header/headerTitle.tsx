"use client";
import { Link, usePathname } from "@/navigation";
import { scrolledAtom } from "@/store/framer.store";
import { useAtomValue } from "jotai";

const HeaderTitle = () => {
  const scrolled = useAtomValue(scrolledAtom);
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={`logo-text lg:text-[20px] text-[16px] font-semibold ${
        pathname === "/"
          ? scrolled
            ? "text-[#6399CE]"
            : "text-[#6399CE] lg:text-white"
          : "text-[#6399CE]"
      }`}
    >
      GEREGE TOURIST PASSPORT LLC
    </Link>
  );
};
export default HeaderTitle;
