"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="lg:space-y-0 space-y-40 snap-y snap-mandatory">
      {children}
      {/* <motion.div
        className="fixed left-0 right-0 top-20 translate-x-0 h-1 bg-[#8df0cc]"
        style={{ scaleX }}
      /> */}
    </div>
  );
};

export default ScrollContainer;
