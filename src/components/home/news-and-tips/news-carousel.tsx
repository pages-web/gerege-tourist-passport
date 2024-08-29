import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "@/components/ui/image";
import { IKBCategoryDetail } from "@/types/kb.types";
import NewsCard from "./news-card";

const NewsCarousel = (category: IKBCategoryDetail) => {
  const articles = category.articles;

  return (
    <div className="flex justify-center">
      {/* <div className="lg:block hidden absolute right-0 z-10 w-[400px] h-[310px] bg-gradient-to-r from-white/0 to-white"></div> */}
      {/* <div className="lg:block hidden absolute left-0 z-10 w-[400px] h-[310px] bg-gradient-to-l from-white/0 to-white"></div> */}
      <Carousel className="w-full md:max-w-[85%]">
        <CarouselContent>
          {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <NewsCard {...article} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:inline-flex hidden" />
        <CarouselNext className="md:inline-flex hidden" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
