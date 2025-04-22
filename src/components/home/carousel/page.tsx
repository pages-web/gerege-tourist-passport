"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "@/components/ui/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/EmblaCarouselDotButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const slides = [
  {
    backgroundImage: "/image/pictures/cover_1.jpg",
    titleKey: "slide1_title",
    descriptionKey: "slide1_description",
  },
  {
    backgroundImage: "/image/pictures/cover_2.jpg",
    titleKey: "slide2_title",
    descriptionKey: "",
  },
  {
    backgroundImage: "/image/pictures/cover_3.jpg",
    titleKey: "slide3_title",
    descriptionKey: "",
  },
];

const CarouselSection = () => {
  const t = useTranslations("Carousel");
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
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
      data-aos="fade-up"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center p-0 relative overflow-hidden w-full lg:h-[110vh] mx-auto -z-10"
          >
            <Image
              src={slide.backgroundImage}
              alt={slide.titleKey}
              width={1920}
              height={1080}
              quality={100}
              className="object-contain lg:object-cover h-full w-full"
            />

            {t(slide.titleKey) && (
              <div className="w-full flex justify-center absolute bottom-0 left-0 py-6 lg:py-10">
                <div className="bg-black/50 w-[90%] z-10 text-white p-3 lg:p-6 rounded-2xl">
                  <h3 className="text-sm lg:text-4xl font-bold">
                    {t(slide.titleKey)}
                  </h3>
                </div>
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full absolute bottom-2 lg:bottom-5 flex justify-center gap-[10px]">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full
            ${index === selectedIndex ? " bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselSection;
