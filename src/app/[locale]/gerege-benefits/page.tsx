"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
// import PayemntBasicPage from "@/component/payment/page";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CardList, CardType, CardListType, imgURLType } from "./CardList";
// import WeatherAndCurrency from "@/component/weather-and-currency/page";
import { useMemo } from "react";

import dynamic from "next/dynamic";

const PayemntBasicPage = dynamic(() => import("@/component/payment/page"), {
  ssr: false,
});
const WeatherAndCurrency = dynamic(
  () => import("@/component/weather-and-currency/page"),
  {
    ssr: false,
  }
);

const navItems = [
  { name: "ALL", icon: null, category: "ALL" },
  { name: "Museum", icon: "/image/museum.png", category: "museum" },
  { name: "Culture", icon: "/image/flag.png", category: "culture" },
  { name: "Vouchers", icon: "/image/flag.png", category: "vouchers" },
  {
    name: "U-Point Card",
    icon: "/image/flag.png",
    category: "upointcard",
  },
  {
    name: "Data Simcard",
    icon: "/image/flag.png",
    category: "datasimcard",
  },
];

const convertImgURLToArray = (imgURL: imgURLType): string[] => {
  return Object.values(imgURL);
};

function BenefitsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedItem, setClickedItem] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [carousel, setCarousel] = useState(0);

  // Header iin search heseg. ehlel
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
      setClickedItem(getCategoryIndex(categoryParam));
    }
  }, [categoryParam]);
  const getCategoryIndex = (category: string | undefined): number => {
    return navItems.findIndex((item) => item.category === category);
  };
  // Header iin search heseg. tugsgul

  // gerege-benefits iin search heseg. ehlel
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("");
  };
  // gerege-benefits iin search heseg. tugsgul

  const handleItemClick = (index: number) => {
    setClickedItem(index === clickedItem ? null : index);
    setSelectedCard(null);
  };

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  const getAllCards = (): CardType[] => {
    const category = navItems[clickedItem!]?.category;
    if (category === "ALL") {
      return Object.values(CardList).flat();
    } else if (category && CardList.hasOwnProperty(category)) {
      return CardList[category as keyof CardListType] || [];
    }
    return [];
  };

  const filteredCards = getAllCards().filter((card: CardType) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReload = () => {
    window.location.reload();
  };

  // Carousel
  useEffect(() => {
    if (selectedCard && selectedCard.imgURL) {
      const imagesArray = convertImgURLToArray(selectedCard.imgURL);
      const intervalId = setInterval(() => {
        setCarousel((prevIndex) => (prevIndex + 1) % imagesArray.length);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [selectedCard]);

  const goToSlide = (index: number) => {
    setCarousel(index);
  };

  return (
    <div className="lg:w-[1200px] w-[389px] h-fit mx-auto lg:mt-12 mt-6 lg:mb-12 mb-4 relative">
      <WeatherAndCurrency />
      <div className="text-center mb-10">
        <div className="text-[#1D2939] font-bold lg:text-[26px] text-[18px]">
          GEREGE TOUR CARD Benefits
        </div>
        <div className="text-gray-600 lg:text-[14px] text-[12px]">
          Transportation card with discounts for shopping, attractions,
          performances and more
        </div>
      </div>

      {/* Start nav */}
      <div className="lg:w-full w-[389px] h-fit flex flex-wrap justify-center lg:justify-start lg:gap-4 gap-3 mb-7">
        {navItems.map((item, index) => (
          <div key={index}>
            <div
              className={`w-fit lg:h-[35px] h-[25px] flex lg:gap-2 gap-1 lg:px-2 px-2 items-center lg:text-[16px] text-[15px] font-medium border border-gray-00 rounded-[3px] cursor-pointer ${
                index === clickedItem
                  ? "bg-[#EBFAFF] text-blue-600"
                  : "bg-transparent text-gray-600"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon && (
                <Image
                  alt=""
                  src={item.icon}
                  width={22}
                  height={22}
                  className="lg:w-[22px] w-[18px] lg:h-[22px] h-[18px]"
                />
              )}
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-full w-[389px] flex justify-between pl-1 items-center mb-8">
        {selectedCard ? (
          <div className="flex lg:gap-3 gap-1">
            {" "}
            <div
              className="flex lg:gap-2 text-gray-800 font-bold cursor-pointer"
              onClick={handleReload}
            >
              Benefits <KeyboardArrowRightIcon />
            </div>
            <div className="text-[#0087FF] lg:text-[18px] text-[16px] font-semibold">
              {selectedCard.title}
            </div>
          </div>
        ) : (
          <div className="text-gray-600 lg:text-[17px] text-[14px] font-semibold mt-4 px-1">
            Find out benefits from{" "}
            <span className="text-blue-600">{filteredCards.length}</span> brands
          </div>
        )}

        <div className="lg:w-[260px] w-[170px] lg:h-[35px] h-[25px] flex items-center justify-between lg:pl-[12px] pl-[6px] bg-[#FCFCFD] border-[2px] border-gray-100">
          <SearchIcon className="w-[24px] h-[24px] text-gray-400" />
          <Input
            type="search"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearchSubmit();
              }
            }}
          />
        </div>
      </div>
      <hr className="w-full h-[2px] text-gray-600 lg:mb-[80px] mb-[50px]" />
      {/* End nav */}

      {/* Start card list */}
      {selectedCard ? (
        <div className="w-full h-fit flex flex-col gap-20 mt-6 lg:p-4 p-2">
          {/* coupon */}
          <div className="w-full h-[100px] flex items-center lg:pl-8 pl-4 lg:gap-[30px] gap-4 bg-gray-200">
            <Image alt="" src="/image/coupon-icon.png" width={44} height={44} />

            <div className="h-fit flex gap-2 flex-col">
              <div className="text-gray-800 font-bold lg:text-[20px] text-[14px]">
                Coupon
              </div>
              <ul className="list-disc pl-4">
                <li className="text-gray-500 lg:text-[14px] text-[11px]">
                  {selectedCard.cuponContent}
                </li>
              </ul>
            </div>
          </div>
          {/* about store */}
          <div className="w-full h-fit flex flex-col lg:gap-8 gap-6">
            {" "}
            <div className="text-gray-800 lg:text-[22px] text-[18px] font-bold text-center">
              {selectedCard.title}
            </div>
            <div className="w-full h-fit flex flex-wrap-reverse gap-8 lg:justify-between">
              <div className="w-[380px] flex flex-col lg:gap-7 gap-4 px-1">
                <div className="text-gray-600 font-normal lg:text-[14px] text-[13px] leading-5">
                  {selectedCard.about.text1}
                </div>
                <div className="text-gray-600 font-normal lg:text-[14px] text-[13px] leading-5">
                  {selectedCard.about.text2}
                </div>
                <div>
                  <PayemntBasicPage />
                </div>
              </div>

              {/*Start Carousel section */}
              <div className="relative">
                <div className="lg:w-[600px] lg:h-[400px] w-[385px] h-[240px] bg-gray-200">
                  {selectedCard.imgURL &&
                    convertImgURLToArray(selectedCard.imgURL).map(
                      (imgURL, index) => (
                        <Image
                          key={index}
                          alt=""
                          src={imgURL}
                          fill
                          className={`transition-opacity duration-1000 ${
                            carousel === index ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      )
                    )}
                </div>
                <div className="flex gap-2 justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-1">
                  {selectedCard.imgURL &&
                    convertImgURLToArray(selectedCard.imgURL).map(
                      (_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            carousel === index ? "bg-blue-600" : "bg-gray-300"
                          }`}
                          onClick={() => goToSlide(index)}
                        />
                      )
                    )}
                </div>
              </div>
              {/*End Carousel section */}
            </div>
          </div>

          {/* contact shopping and service */}
          <div className="lg:w-full w-[389px] h-fit flex lg:justify-between flex-wrap gap-5 lg:pl-0 pl-3">
            {/* Contact */}
            <div className="lg:w-fit w-[389px] h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold lg:text-[18px] text-[15px]">
                Contact
              </div>
              <div className="flex items-center lg:gap-2 gap-1">
                <LocalPhoneIcon className="lg:w-[21px] w-[16px] lg:h-[21px] h-[16px] text-gray-700" />
                <div className="text-gray-600 lg:text-[14px] text-[12px]">
                  {selectedCard.contact.phone}
                </div>
              </div>
              <div className="flex items-center lg:gap-2 gap-1 overflow-hidden hover:overflow-visible cursor-pointer">
                <EmailIcon className="lg:w-[21px] w-[14px] lg:h-[21px] h-[14px] text-gray-700" />
                <div className="text-gray-600 lg:text-[14px] text-[12px]">
                  {selectedCard.contact.email}
                </div>
              </div>
              <div className="flex items-center lg:gap-2 gap-1">
                <LocationOnIcon className="lg:w-[21px] w-[18px] lg:h-[21px] h-[18px] text-gray-700" />
                <div className="text-gray-600 lg:text-[14px] text-[12px]">
                  {selectedCard.contact.address}
                </div>
              </div>
            </div>

            {/* Shopping */}
            <div className="lg:w-fit w-[389px] h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold lg:text-[18px] text-[15px]">
                Shopping
              </div>
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[12px] font-normal leading-5">
                <li>{selectedCard.shopping.text1}</li>
                <li>{selectedCard.shopping.text2}</li>
                <li>{selectedCard.shopping.text3}</li>
                <li>{selectedCard.shopping.text4}</li>
                <li>{selectedCard.shopping.text5}</li>
              </ul>
            </div>

            {/* Service */}
            <div className="lg:w-fit w-[389px] h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold lg:text-[18px] text-[15px]">
                Service
              </div>
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[12px] font-normal leading-5">
                <li>{selectedCard.service.text1}</li>
                <li>{selectedCard.service.text2}</li>
                <li>{selectedCard.service.text3}</li>
                <li>{selectedCard.service.text4}</li>
                <li>{selectedCard.service.text5}</li>
                <li>{selectedCard.service.text6}</li>
                <li>{selectedCard.service.text7}</li>
              </ul>
            </div>
          </div>

          {/* Condition of use & consideration */}
          <div className="w-full h-fit flex flex-col gap-4">
            <div className="text-gray-600 font-bold lg:text-[18px] text-[16px]">
              Condition of use & consideration
            </div>
            {/* Application benefits */}
            <div className="w-full h-fit bg-gray-200 flex items-center gap-5 lg:p-7 p-3">
              <Image
                alt=""
                src="/image/check-circle-broken.png"
                width={44}
                height={44}
              />
              <div className="flex flex-col gap-1">
                <div className="text-gray-800 font-bold lg:text-[17px] text-[15px]">
                  Application benefits
                </div>
                <div className="text-gray-500 text-[13px]">
                  {selectedCard.appBenefits.text1}
                </div>
                <ul className="list-disc pl-5 w-fit text-gray-800 text-[13px] bg-white">
                  <li>{selectedCard.appBenefits.text2}</li>
                </ul>
              </div>
            </div>
            {/* Consideration */}
            <div className="w-full h-fit bg-gray-200 flex items-center gap-5 lg:p-7 p-3">
              <Image
                alt=""
                src="/image/consideratio-icon.png"
                width={44}
                height={44}
              />

              <div className="flex flex-col gap-1">
                <div className="text-gray-800 font-bold lg:text-[17px] text-[15px]">
                  Consideration
                </div>
                <div className="text-gray-500 text-[13px]">
                  {selectedCard.consideration.text1}
                </div>
              </div>
            </div>
          </div>

          {/* Start google map */}
          <div
            id="map"
            className="w-full lg:h-[400px] h-[280px] flex items-center justify-between border"
          >
            {selectedCard !== null && (
              <iframe
                src={selectedCard.mapURL}
                width="100%"
                height="399px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="lg:w-full lg:h-[399px] h-[280px]"
              ></iframe>
            )}
          </div>
        </div>
      ) : (
        <div className="lg:w-full w-[389px] h-fit flex flex-col gap-2 px-1">
          {filteredCards.slice(0, visibleCount).map((card: CardType) => (
            <div
              key={card.id}
              className="w-full lg:h-[200px] h-[150px] flex lg:gap-8 gap-4 bg-gray-50 pt-2 cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div className="lg:w-[200px] w-[150px] lg:h-[180px] h-[135px] border border-gray-200 flex items-center justify-center">
                {card.logoImgURL && (
                  <Image
                    alt=""
                    src={card.logoImgURL}
                    width={180}
                    height={180}
                  />
                )}
              </div>

              <div className="w-fit h-fit flex flex-col lg:gap-6 gap-2">
                <div className="font-bold text-gray-800 lg:text-[22px] text-[18px]">
                  {card.title}
                </div>
                <div className="text-gray-600 font-medium lg:text-[14px] text-[12px]">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Card details */}
    </div>
  );
}

export default function GeregeBenefits() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BenefitsContent />
    </Suspense>
  );
}
