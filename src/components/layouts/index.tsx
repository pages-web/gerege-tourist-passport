import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import CurrentUser from "@/containers/auth/current-user";
import { Suspense, useEffect } from "react";
import Footer from "../footer/page";
import Header from "../header/header";
import WeatherAndCurrency from "../weather-and-currency/page";
import "aos/dist/aos.css";
import ScrollSection from "../scroll-container/scroll-section";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <WeatherAndCurrency />
      <ScrollSection isFooter id="footer" bg>
        <Footer />
      </ScrollSection>
    </>
  );
};

export default DefaultLayout;
