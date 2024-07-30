"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
import PayemntBasicPage from "@/component/payment/page";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CardList, CardType, CardListType } from "./CardList";

const navItems = [
  { name: "ALL", icon: null, category: "ALL" },
  { name: "Museums", icon: "/image/museum.png", category: "museum" },
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

function BenefitsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedItem, setClickedItem] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [category, setCategory] = useState<string | undefined>(undefined);

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

  return (
    <div className="w-[1200px] h-fit mx-auto mt-12 mb-12">
      <div className="text-center mb-10">
        <div className="text-[#1D2939] font-bold text-[26px]">
          GEREGE TOUR CARD Benefits
        </div>
        <div className="text-gray-600 text-[14px]">
          Transportation card with discounts for shopping, attractions,
          performances and more
        </div>
      </div>

      {/* Start nav */}
      <div className="flex gap-4 mb-7">
        {navItems.map((item, index) => (
          <div key={index}>
            <div
              className={`w-fit h-[35px] flex gap-2 px-2 items-center text-[16px] font-medium border border-gray-100 cursor-pointer ${
                index === clickedItem
                  ? "bg-[#EBFAFF] text-blue-600"
                  : "bg-transparent text-gray-600"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon && (
                <Image alt="" src={item.icon} width={22} height={22} />
              )}
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center mb-8">
        {selectedCard ? (
          <div className="flex gap-3">
            {" "}
            <div
              className="flex gap-2 text-gray-800 font-bold cursor-pointer"
              onClick={handleReload}
            >
              Benefits <KeyboardArrowRightIcon />
            </div>
            <div className="text-[#0087FF] text-[18px] font-semibold">
              {selectedCard.title}
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-[17px] font-semibold mt-4">
            Find out benefits from{" "}
            <span className="text-blue-600">{filteredCards.length}</span> brands
          </div>
        )}

        <div className="w-[260px] h-[35px] flex items-center justify-between pl-[12px] bg-[#FCFCFD] border-[2px] border-gray-100">
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
      <hr className="w-full h-[2px] text-gray-600 mb-[80px]" />

      {/* End nav */}

      {/* Start card list */}

      {selectedCard ? (
        <div className="w-full h-fit flex flex-col gap-[80px] mt-6 p-4">
          {/* coupon */}
          <div className="w-full h-[100px] flex items-center pl-8 gap-[30px] bg-gray-200">
            <Image alt="" src="/image/coupon-icon.png" width={44} height={44} />

            <div className="h-fit flex gap-2 flex-col">
              <div className="text-gray-800 font-bold text-[20px]">Coupon</div>
              <ul className="list-disc pl-5">
                <li className="text-gray-500 text-[14px]">
                  {selectedCard.cuponContent}
                </li>
              </ul>
            </div>
          </div>
          {/* about store */}
          <div className="w-full h-fit flex flex-col gap-8">
            {" "}
            <div className="text-gray-800 text-[22px] font-bold text-center">
              {selectedCard.title}
            </div>
            <div className="w-full h-fit flex gap-[120px]">
              <div className="w-[380px] flex flex-col gap-7">
                <div className="text-gray-600 font-normal text-[14px] leading-5">
                  {selectedCard.about.text1}
                </div>
                <div className="text-gray-600 font-normal text-[14px] leading-5">
                  {selectedCard.about.text2}
                </div>
                <div>
                  <PayemntBasicPage />
                </div>
              </div>
              <div className="w-[600px] h-[350px]">
                {selectedCard.imgURL && (
                  <Image
                    alt=""
                    src={selectedCard.imgURL}
                    width={599}
                    height={349}
                  />
                )}
              </div>
            </div>
          </div>

          {/* contact shopping and service */}

          <div className="w-full h-fit flex justify-between">
            {/* Contact */}
            <div className="w-fit h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold text-[18px]">
                Contact
              </div>
              <div className="flex items-center gap-2">
                <LocalPhoneIcon className="w-[21px] h-[21px] text-gray-700" />
                <div className="text-gray-600 text-[14px]">
                  {selectedCard.contact.phone}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="w-[21px] h-[21px] text-gray-700" />
                <div className="text-gray-600 text-[14px]">
                  {selectedCard.contact.email}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LocationOnIcon className="w-[21px] h-[21px] text-gray-700" />
                <div className="text-gray-600 text-[14px]">
                  {selectedCard.contact.address}
                </div>
              </div>
            </div>

            {/* Shopping */}

            <div className="w-fit h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold text-[18px]">
                Shopping
              </div>
              <ul className="list-disc pl-5 text-gray-600 text-[14px] font-normal leading-5">
                <li>{selectedCard.shopping.text1}</li>
                <li>{selectedCard.shopping.text2}</li>
                <li>{selectedCard.shopping.text3}</li>
                <li>{selectedCard.shopping.text4}</li>
                <li>{selectedCard.shopping.text5}</li>
              </ul>
            </div>
            {/* Service */}
            <div className="w-fit h-fit flex flex-col gap-1">
              <div className="text-[#0087FF] font-bold text-[18px]">
                Service
              </div>
              <ul className="list-disc pl-5 text-gray-600 text-[14px] font-normal leading-5">
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
            <div className="text-gray-600 font-bold text-[18px]">
              Condition of use & consideration
            </div>
            {/* Application benefits */}
            <div className="w-full h-fit bg-gray-200 flex items-center gap-5 p-7">
              <Image
                alt=""
                src="/image/check-circle-broken.png"
                width={44}
                height={44}
              />
              <div className="flex flex-col gap-1">
                <div className="text-gray-800 font-bold text-[17px]">
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
            <div className="w-full h-fit bg-gray-200 flex items-center gap-5 p-7">
              <Image
                alt=""
                src="/image/consideratio-icon.png"
                width={44}
                height={44}
              />

              <div className="flex flex-col gap-1">
                <div className="text-gray-800 font-bold text-[17px]">
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
            className="w-full h-[399px] flex items-center justify-between"
          >
            {selectedCard !== null && (
              <iframe
                src={selectedCard.mapURL}
                width="780px"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
            <div className="w-[340px] h-full flex flex-col gap-2 p-1 border">
              <div className="w-full h-fit p-2 bg-[#EBFAFF] text-gray-800 font-bold text-lg">
                Address-4
              </div>
              <div className="w-full h-fit flex justify-between border border-t-0 border-l-0 border-r-0 p-1">
                {/* address map */}
                <div>1</div>
                <div className="flex flex-col gap-1">
                  <div>Nomin supermarket</div>
                  <div>address</div>
                  <div>open closed time</div>
                </div>
                <div>open or closed</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col gap-2">
          {filteredCards.slice(0, visibleCount).map((card: CardType) => (
            <div
              key={card.id}
              className="w-full h-[200px] flex gap-8 bg-gray-50 pt-2 cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div className="w-[200px] h-[180px] border border-gray-200 flex items-center justify-center">
                {card.logoImgURL && (
                  <Image
                    alt=""
                    src={card.logoImgURL}
                    width={180}
                    height={180}
                  />
                )}
              </div>

              <div className="w-fit h-fit flex flex-col gap-6">
                <div className="font-bold text-gray-800 text-[22px]">
                  {card.title}
                </div>
                <div className="text-gray-600 font-medium text-[14px]">
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
