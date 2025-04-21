import FAQ from "@/components/home/faq/page";
import LoyaltyCard from "@/components/home/loyalty-card/page";
import { IPageProps } from "@/types";
import WhyUs from "@/components/home/why-us/page";
import Benefits from "@/components/home/gerege-benefits/page";
import WhyGeregePassport from "@/components/home/why-choose-gerege-tourist-passport/page";
import NewsAndTips from "@/components/home/news-and-tips/page";
import CarouselSection from "@/components/home/carousel/page";
import HelpCenter from "@/components/home/help-center/help-center";
import ScrollContainer from "@/components/scroll-container/scroll-container";
import ScrollSection from "@/components/scroll-container/scroll-section";
import Footer from "@/components/footer/page";

const Home = () => {
  return (
    <ScrollContainer>
      <ScrollSection id="home">
        <CarouselSection />
      </ScrollSection>

      <ScrollSection id="about">
        <WhyUs />
      </ScrollSection>

      <ScrollSection id="gerege-benefit">
        <Benefits />
      </ScrollSection>

      <ScrollSection id="news-and-tips">
        <NewsAndTips />
      </ScrollSection>

      <ScrollSection id="help-center">
        <HelpCenter />
      </ScrollSection>

      <ScrollSection id="faq">
        <FAQ />
      </ScrollSection>
    </ScrollContainer>
  );
};

export default Home;
