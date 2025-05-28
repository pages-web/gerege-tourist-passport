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
      <div className="bg-white relative rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] flex justify-center items-center px-4 py-10 gap-2">
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
      <div className="bg-white relative cursor-pointer rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] flex justify-center items-center px-4 py-10 gap-2 group transition-all h-full">
        <div className="flex flex-col gap-2 items-center group-hover:opacity-0 ease-in-out duration-300">
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
          <h3 className="text-center font-bold">{category.name}</h3>
        </div>

        <h3 className="px-4 w-full capitalize text-center text-[#6399CE] justify-center flex items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
          About {category.name} <ArrowRight className="min-w-4 min-h-4" />
        </h3>
      </div>
    </Link>
  );
};
export default CategoryCard;
