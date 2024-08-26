import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import PayemntBasicPage from "../payment/page";
import { useTranslations } from "next-intl";

interface NavItem {
  name: string;
  href: string;
}

interface SidebarProps {
  navItems: NavItem[];
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, onClose }) => {
  const t = useTranslations("Header");
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "70%" }}
      exit={{ x: "100%", transition: { duration: 0.5 } }}
      className="fixed top-[83px] left-0 w-[230px] h-fit bg-white shadow-lg z-20"
    >
      <button
        className="absolute top-4 right-4 text-gray-600 text-2xl flex items-center"
        onClick={onClose}
      >
        <CloseIcon className="w-5 h-5" />
      </button>
      <div className="flex flex-col gap-1 p-3">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className="py-2 text-gray-800 text-[13px] font-semibold hover:text-blue-600"
              onClick={onClose}
            >
              {t(item.name)}
            </div>
          </Link>
        ))}
        {/* <PayemntBasicPage /> */}
      </div>
    </motion.div>
  );
};

export default Sidebar;
