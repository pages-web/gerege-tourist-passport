"use client";

const ScrollContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col lg:gap-32 snap-y snap-mandatory">
      {children}
      {/* <motion.div
        className="fixed left-0 right-0 top-20 translate-x-0 h-1 bg-[#8df0cc]"
        style={{ scaleX }}
      /> */}
    </div>
  );
};

export default ScrollContainer;
