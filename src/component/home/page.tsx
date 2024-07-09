import HomeComponent from "./home/page";
import WhyUs from "./why-us/page";
import Benefits from "./gerege-benefits/page";
import WhyGeregePassport from "./why-choose-gerege-tourist-passport/page";
import NewsAndTips from "./news-and-tips/page";
import LoyaltyCard from "./loyalty-card/page";
import FAQ from "./faq/page";
import Review from "./review/page";

export default function HomePage() {
  return (
    <main className="w-full h-fit flex flex-col items-center">
      <HomeComponent />
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
