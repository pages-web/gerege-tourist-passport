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
import { EmblaCarouselType } from "embla-carousel";

const slides = [
  {
    backgroundImage: "/image/home-bg.jpg",
    titleKey: "slide1_title",
    descriptionKey: "slide1_description",
  },
  {
    backgroundImage: "/image/about-1.jpg",
    titleKey: "",
    descriptionKey: "",
  },
  {
    backgroundImage: "/image/about-1.jpg",
    titleKey: "",
    descriptionKey: "",
  },
  {
    backgroundImage: "/image/about-1.jpg",
    titleKey: "",
    descriptionKey: "",
  },
];

const CarouselSection = () => {
  const t = useTranslations("Carousel");
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) as any
  );

  const onNavButtonClick = useCallback((emblaApi: any) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

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
      className="w-full"
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative w-full -z-10 overflow-hidden max-h-[800px]"
          >
            <Image
              src={slide.backgroundImage}
              alt={slide.titleKey}
              width={1000}
              height={700}
              quality={100}
              className="w-full"
            />

            <div className="w-full flex justify-center absolute bottom-0 left-0 py-10">
              <div className="bg-black/50 w-[80%] z-10 text-white p-6 rounded-2xl">
                <h3 className="text-5xl font-bold">{t(slide.titleKey)}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full absolute bottom-5 flex justify-center gap-[10px]">
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
