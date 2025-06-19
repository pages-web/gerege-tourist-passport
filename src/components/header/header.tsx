import CurrentUser from "@/containers/auth/current-user";
import GeregeButton from "../gerege-button/gerege-button";
import LanguageAndSearch from "./language-and-search";
import HeaderTexts from "./header-texts";
import MobileMenu from "./mobile-header";
import { Link } from "@/navigation";
import { useScroll } from "framer-motion";
import HeaderContainer from "./header-container";
import Image from "../ui/image";
import HeaderTitle from "./headerTitle";

export default function Header() {
  return (
    <HeaderContainer>
      <LanguageAndSearch />
      <div className="w-full py-5">
        <div className="container flex justify-between items-center gap-10">
          <div className="flex flex-col items-center">
            <Link href={"/"}>
              <div className="w-32 lg:w-40 group relative cursor-pointer">
                <Image
                  src="/image/logo.png"
                  width={2010}
                  height={1003}
                  className="w-full h-full transition-transform duration-300 group-hover:rotate-12"
                  alt="logo"
                />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 via-orange-400 to-transparent transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>

            {/* <HeaderTitle /> */}
          </div>

          <div className="lg:flex justify-between items-center text-center gap-8 hidden">
            <HeaderTexts />
            <GeregeButton className="text-[16px]" />
            <CurrentUser />
          </div>
          <div className="lg:hidden flex gap-3">
            <CurrentUser />
            <MobileMenu />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
