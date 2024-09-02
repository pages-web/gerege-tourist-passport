import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import CurrentUser from "@/containers/auth/current-user";
import { Suspense } from "react";
import Footer from "../footer/page";
import Header from "../header/page";
import WeatherAndCurrency from "../weather-and-currency/page";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <WeatherAndCurrency />
      <Footer />
    </>
  );
};

export default DefaultLayout;
