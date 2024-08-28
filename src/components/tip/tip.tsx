import { ReactNode } from "react";

const Tip = ({
  icon,
  title,
  desc,
  desc2,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  desc2?: string;
}) => {
  return (
    <div className="w-full p-8 flex items-center gap-x-8 bg-[#EAECF0]">
      <span className="text-[#98A2B3]">{icon}</span>
      <div className="space-y-3">
        <h4 className="text-[20px] font-semibold text-[#1D2939]">{title}</h4>
        <p className="text-[#667085] text-[18px]">{desc}</p>
        <p className="text-[#1D2939] text-[16px]">{desc2}</p>
      </div>
    </div>
  );
};
export default Tip;
