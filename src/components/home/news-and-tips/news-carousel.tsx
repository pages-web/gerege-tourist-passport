import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "@/components/ui/image";
import { IKBCategoryDetail } from "@/types/kb.types";
import NewsCard from "./news-card";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/EmblaCarouselDotButton";

const NewsCarousel = ({
  news,
}: {
  news: { title: string; description: string; image: string }[];
}) => {
  // const articles = category.articles;
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) as any
  );

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api as any
  );

  return (
    <div className="flex justify-center">
      {/* <div className="lg:block hidden absolute right-0 z-10 w-[400px] h-[310px] bg-gradient-to-r from-white/0 to-white"></div> */}
      {/* <div className="lg:block hidden absolute left-0 z-10 w-[400px] h-[310px] bg-gradient-to-l from-white/0 to-white"></div> */}
      <Carousel
        className="w-full md:max-w-[90%] pb-10"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
        data-aos="fade-up"
      >
        <CarouselContent>
          {news?.map((article, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <NewsCard {...article} />
            </CarouselItem>
          ))}
          {/* {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <NewsCard {...article} />
            </CarouselItem>
          ))} */}
        </CarouselContent>
        <div className="w-full absolute bottom-0 flex justify-center gap-[10px]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full
                    ${index === selectedIndex ? "bg-black/60" : "bg-black/30"}`}
            />
          ))}
        </div>
        <CarouselPrevious className="md:inline-flex hidden" />
        <CarouselNext className="md:inline-flex hidden" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
