"use client";

import { usePathname } from "@/navigation";
import { scrolledAtom } from "@/store/framer.store";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useAtom } from "jotai";
import { PropsWithChildren, useRef, useState } from "react";

const HeaderContainer = ({ children }: PropsWithChildren) => {
  const [scrolled, setScrolled] = useAtom(scrolledAtom);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname === "/") {
      if (latest > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  });

  return (
    <motion.div
      className={`w-full mx-auto fixed h-fit top-0 z-50 transition-all duration-300  ${
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
