import Image from "@/components/ui/image";
import { Link } from "@/navigation";
import { ICmsCategory } from "@/types/cms.types";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const CategoryCard = ({
  category,
  timestamp,
}: {
  category: ICmsCategory;
  timestamp: number;
}) => {
  const currentImage =
    category.slug === "museum"
      ? "/image/frees/museum.png"
      : category.slug === "data-sim"
      ? "/image/frees/sim.png"
      : category.slug === "transport"
      ? "/image/frees/transport.png"
      : category.slug === "traditional-costume-rental"
      ? "/image/frees/costume.png"
      : category.slug === "gift"
      ? "/image/frees/gift.png"
      : category.slug === "hotel-guest-house"
      ? "/image/discounts/hotels.png"
      : category.slug === "restaurant-lounge"
      ? "/image/discounts/restaurants.png"
      : category.slug === "camps"
      ? "/image/discounts/camps.png"
      : category.slug === "shops"
      ? "/image/discounts/shops.png"
      : category.slug === "entertainment"
      ? "/image/discounts/entertainment.png"
      : category.slug === "beauty-healthy"
      ? "/image/discounts/beauty.png"
      : category.slug === "other"
      ? "/image/discounts/other.png"
      : "/image/frees/coming.png";

  if (!category.slug) {
    return (
      <div className="relative cursor-pointer rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] flex flex-col items-center px-4 py-10 gap-2 group transition-all h-full overflow-hidden">
        <div className="flex flex-col gap-2 items-center">
          <div className="w-12 h-12">
            <Image
              src={`${currentImage}?cacheBust=${timestamp}`}
              width={160}
              height={160}
              className="w-full h-full"
              alt={category.name}
              key={`${currentImage}-${timestamp}`}
              unoptimized
            />
          </div>
          <h3 className="font-bold"> </h3>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/benefits/${category._id}`}>
      <div className="relative cursor-pointer rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] flex flex-col items-center px-4 py-10 gap-2 group transition-all h-full overflow-hidden">
        <div className="flex flex-col gap-2 items-center group-hover:opacity-1">
          <div className="w-12 h-12">
            <Image
              src={`${currentImage}?cacheBust=${timestamp}`}
              width={160}
              height={160}
              className="w-full h-full group-hover:rotate-12 duration-300 ease-in-out"
              alt={category.name}
              key={`${currentImage}-${timestamp}`}
              unoptimized
            />
          </div>
          <h3 className="text-center font-bold text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#6399CE] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            {category.name}
          </h3>
        </div>
        <h3 className="w-full px-4 capitalize text-[#6399CE] text-center flex items-center justify-center gap-2 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          About {category.name} <ArrowRight className="min-w-4 min-h-4" />
        </h3>
      </div>
    </Link>
  );
};
export default CategoryCard;
