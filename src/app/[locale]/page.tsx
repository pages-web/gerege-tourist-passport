import FAQ from "@/components/home/faq/page";
import LoyaltyCard from "@/components/home/loyalty-card/page";
import { IPageProps } from "@/types";
import WhyUs from "@/components/home/why-us/page";
import Benefits from "@/components/home/gerege-benefits/page";
import WhyGeregePassport from "@/components/home/why-choose-gerege-tourist-passport/page";
import NewsAndTips from "@/components/home/news-and-tips/page";
import CarouselSection from "@/components/home/carousel/page";

const Home = ({ searchParams }: IPageProps) => {
  return (
    <main className="min-h-screen flex flex-col items-center gap-y-28">
      <CarouselSection />
      <div className="container space-y-28">
        <WhyUs />
        <Benefits />
      </div>
      <div className="container space-y-28">
        <NewsAndTips />
        {/* <LoyaltyCard searchParams={searchParams} /> */}
        <FAQ />
      </div>
      {/* <Review /> */}
    </main>
  );
};

export default Home;
