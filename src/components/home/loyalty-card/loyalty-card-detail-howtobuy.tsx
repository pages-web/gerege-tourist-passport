import Image from "@/components/ui/image";
import { MapPin } from "lucide-react";

const LoyaltyCardDetailHowToBuy = () => {
  const TitleWithDesc = ({ title, desc }: { title: string; desc: string }) => {
    return (
      <div className="space-y-1">
        <h2 className="text-[#1D2939] text-[16px] md:text-[20px]">{title}</h2>
        <p className="text-[12px] md:text-[16px] text-[#475467]">{desc}</p>
      </div>
    );
  };
  const ImageWithAddress = ({
    address,
    img,
  }: {
    address: string;
    img: string;
  }) => {
    return (
      <div className="min-w-[150px] space-y-2">
        <div className="border p-4">
          <Image src={img} width={200} height={150} quality={100} />
        </div>
        <div className="flex gap-1 md:gap-2 text-[12px] md:text-[14px]">
          <MapPin
            className="min-w-4 min-h-4 md:min-w-6 md:min-h-6"
            width={24}
            height={24}
          />
          <span>{address}</span>
        </div>
      </div>
    );
  };
  const stores = [
    {
      address:
        "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
      img: "/image/cu.png",
    },
    {
      address:
        "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
      img: "/image/cu.png",
    },
    {
      address:
        "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
      img: "/image/cu.png",
    },
  ];

  return (
    <div className="p-3 md:p-6 flex lg:flex-row flex-col justify-between gap-8">
      <div className="space-y-3 md:space-y-6">
        <TitleWithDesc
          title="1. CU convenience store"
          desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dicta odit
      reprehenderit odio voluptas velit rerum enim labore, magnam deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iste alias
      quae dolorum illum porro unde eligendi adipisci aliquid placeat!`}
        />
        <div className="md:overflow-visible overflow-x-scroll flex gap-3 md:gap-6">
          {stores.map((store, index) => {
            return (
              <ImageWithAddress
                address={store.address}
                img={store.img}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="space-y-3 md:space-y-6">
        <TitleWithDesc
          title="2. Contact us directly on social media for free delivery."
          desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dicta odit
      reprehenderit odio voluptas velit rerum enim labore, magnam deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iste alias
      quae dolorum illum porro unde eligendi adipisci aliquid placeat!`}
        />
        <div className="border w-fit p-4">
          <Image src={"/image/cu.png"} width={200} height={150} quality={100} />
        </div>
      </div>
    </div>
  );
};
export default LoyaltyCardDetailHowToBuy;
