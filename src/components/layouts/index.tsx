"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import CurrentUser from "@/containers/auth/current-user";
import { Suspense, useEffect } from "react";
import Footer from "../footer/page";
import Header from "../header/page";
import WeatherAndCurrency from "../weather-and-currency/page";
import AOS from "aos";
import "aos/dist/aos.css";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Easing options
      // once: true, // Whether animation should happen only once
      delay: 100,
    });
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
