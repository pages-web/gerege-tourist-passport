import CurrentUser from "@/containers/auth/current-user";
import GeregeButton from "../gerege-button/gerege-button";
import LanguageAndSearch from "./language-and-search";
import HeaderTexts from "./header-texts";
import MobileMenu from "./mobile-header";
import { Link } from "@/navigation";

export default function Header() {
  return (
    <div className="w-full mx-auto sticky h-fit top-0 z-50 shadow-md">
      <LanguageAndSearch />
      <div className="bg-white w-full py-5">
        <div className="container flex justify-between items-center gap-10">
          <Link
            href="/"
            className="logo-text lg:text-[20px] text-[16px] font-semibold text-[#6399CE]"
          >
            GEREGE TOURIST PASSPORT LLC
          </Link>
          <div className="lg:flex justify-between items-center text-center gap-8 hidden">
            <HeaderTexts />
            <GeregeButton className="text-[16px]" />
            <CurrentUser />
          </div>
          <div className="lg:hidden flex gap-3">
            {/* <CurrentUser /> */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
