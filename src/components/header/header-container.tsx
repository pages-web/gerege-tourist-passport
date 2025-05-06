"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "@/navigation";
import { scrolledAtom } from "@/store/framer.store";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useAtom } from "jotai";
import { PropsWithChildren, useRef, useState } from "react";

const HeaderContainer = ({ children }: PropsWithChildren) => {
  const [scrolled, setScrolled] = useAtom(scrolledAtom);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isLaptop = useMediaQuery("(min-width: 1200px)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname === "/") {
      if (isLaptop ? latest > 200 : latest > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  });

  return (
    <motion.div
      className={`w-full mx-auto sticky h-fit top-0 z-50 transition-all duration-300  ${
        pathname === "/"
          ? scrolled
            ? "bg-white shadow-md"
            : "backdrop-blur-sm py-3"
          : "bg-white shadow-md"
      }`}
    >
      {children}
    </motion.div>
  );
};
export default HeaderContainer;
