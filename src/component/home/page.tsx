import Carousel from "./carousel/page";
import WhyUs from "./why-us/page";
import Benefits from "./gerege-benefits/page";
import WhyGeregePassport from "./why-choose-gerege-tourist-passport/page";
import NewsAndTips from "./news-and-tips/page";

import FAQ from "./faq/page";
import Review from "./review/page";
import LoyaltyCard from "./loyalty-card/page";

export default function HomePage() {
  return (
    <main className="w-full lg:max-w-screen-2xl h-fit flex flex-col items-center m-auto">
      <Carousel />
      <WhyUs />
      <Benefits />
      <WhyGeregePassport />
      <NewsAndTips />
      <LoyaltyCard />
      <FAQ />
      <Review />
    </main>
  );
}
