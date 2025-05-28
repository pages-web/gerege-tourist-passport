import Footer from "../footer/page";
import Header from "../header/header";
import WeatherAndCurrency from "../weather-and-currency/page";
import "aos/dist/aos.css";
import ScrollSection from "../scroll-container/scroll-section";
import GeregeButton from "../gerege-button/gerege-button";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <div className="lg:hidden w-full sticky bottom-0 p-6 bg-slate-100 z-50">
        <GeregeButton className="w-full" />
      </div>
      <div className="w-fit h-fit flex flex-col gap-2 fixed z-50 right-2 md:top-[76%] top-[50%]">
        <GeregeButton isIcon />
        <WeatherAndCurrency />
      </div>
      <ScrollSection isFooter id="footer" bg>
        <Footer />
      </ScrollSection>
    </>
  );
};

export default DefaultLayout;
