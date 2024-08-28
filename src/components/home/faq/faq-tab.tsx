import { ReactNode } from "react";

const FaqTab = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive?: boolean;
  onClick: any;
}) => {
  return (
    <button
      className={`p-[6px] md:px-4 md:py-[10px] text-[12px] md:text-[18px] ${
        isActive
          ? "bg-[#006EFF] text-white"
          : "bg-white text-[#344054] border-x even:border-x-0"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default FaqTab;
