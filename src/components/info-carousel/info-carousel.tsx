"use client";

import Image from "../ui/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";
import { IAttachment } from "@/types";

interface InfoCarouselProps {
  attachments?: IAttachment[];
}

const InfoCarousel = ({ attachments }: InfoCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div>
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {attachments?.map((img, index) => (
            <CarouselItem key={index}>
              <div className="max-w-[1000px] overflow-hidden rounded-md">
                <Image src={img?.url} width={1000} height={700} quality={100} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default InfoCarousel;
