import Carousel from "./carousel/page";
import WhyUs from "./why-us/page";
import Benefits from "./gerege-benefits/page";
import WhyGeregePassport from "./why-choose-gerege-tourist-passport/page";
import NewsAndTips from "./news-and-tips/page";
import WeatherAndCurrency from "../weather-and-currency/page";

import FAQ from "./faq/page";
import Review from "./review/page";
import LoyaltyCard from "./loyalty-card/page";

export default function HomePage() {
  return (
    <main className="lg:max-w-screen-2xl lg:w-full w-[389px] lg:h-fit h-fit flex flex-col items-center m-auto relative">
      <Carousel />
      <WhyUs />
      <Benefits />
      <WhyGeregePassport />
      <NewsAndTips />
      <LoyaltyCard />
      <FAQ />
      <Review />
      <WeatherAndCurrency />
    </main>
  );
}
