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
      {/* <LanguageAndSearch /> */}
      <div className="w-full py-5">
        <div className="container flex justify-between items-center gap-10">
          {/* <div className="w-40">
            <Image
              src="/image/logo.png"
              width={2010}
              height={1003}
              className="w-full h-full"
            />
          </div> */}
          <HeaderTitle />

          <div className="lg:flex justify-between items-center text-center gap-8 hidden">
            <HeaderTexts />
            <GeregeButton className="text-[16px]" />
            <CurrentUser />
          </div>
          <div className="lg:hidden flex gap-3">
            <MobileMenu />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
