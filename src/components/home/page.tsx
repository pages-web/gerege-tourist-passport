import Carousel from "./carousel/page";
import WhyUs from "./why-us/page";
import Benefits from "./gerege-benefits/page";
import WhyGeregePassport from "./why-choose-gerege-tourist-passport/page";
import NewsAndTips from "./news-and-tips/page";
import WeatherAndCurrency from "../weather-and-currency/page";

import FAQ from "./faq/page";
import Review from "./review/page";
import LoyaltyCard from "./loyalty-card/page";
import GeregeButton from "../gerege-button/gerege-button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-y-24">
      <Carousel />
      <div className="container space-y-16">
        <WhyUs />
        <Benefits />
      </div>
      <WhyGeregePassport />
      <div className="container space-y-24">
        <NewsAndTips />
        {/* <LoyaltyCard /> */}
        <FAQ />
      </div>
      {/* <Review /> */}

      <WeatherAndCurrency />
    </main>
  );
}
