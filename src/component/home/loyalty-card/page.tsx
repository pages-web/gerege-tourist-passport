"use client";
import React, { useState, useEffect } from "react";
import ListIcon from "@mui/icons-material/List";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlaceIcon from "@mui/icons-material/Place";
import NominMap from "../google-map/Nomin";

interface CardType {
  id: number;
  imgURL?: string;
  title: string;
  content: string;
  address: string;
}

const cardList: CardType[] = [
  {
    id: 1,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
  },
  {
    id: 2,
    imgURL: "/image/cu-logo.png",
    title: "CU convenience store",
    content:
      "Nomin Supermarket first started its operations in [year] at the [store location]. In the [number] years since its opening, it has grown to [number] branches nationwide, offering [services/products].",
    address: "1234 Main Street, Anytown, USA",
  },
  {
    id: 3,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
  },
  {
    id: 4,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
  },
  {
    id: 5,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
  },
  {
    id: 6,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
  },
];

export default function LoyaltyCard() {
  const [selectedMenu, setSelectedMenu] = useState("HOTEL");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedListAndMap, setSelectedListAndMap] = useState("LIST");
  const menuItems = ["HOTEL", "RESTAURANT", "MUSEUM"];

  const handleMenuClick = (item: string) => {
    setSelectedMenu(item);
  };
  const handleListAndMapClick = (items: string) => {
    setSelectedListAndMap(items);
  };

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
  };

  const moreCount = cardList.length - 4;
  const visibleCards = cardList.slice(0, 2);
  const hiddenCardsCount = cardList.length - visibleCards.length;

  useEffect(() => {
    setSelectedCard(cardList[0].id);
  }, []);

  return (
    <div className="w-[1200px] h-[560px] flex flex-col justify-between gap-5 m-auto mb-[60px]">
      <div className="text-center">
        <div className="text-gray-800 text-[22px] font-bold">
          RECEIVE SPECIAL OFFERS WITH OUR &quot;U POINT&quot; LOYALTY CARD.
        </div>
        <div className="text-[18px] text-gray-600 font-normal">
          In partnership with over 60 Mongolian top brands
        </div>
      </div>

      {/* menu start */}

      {selectedListAndMap === "MAP" ? (
        // Start google map chain

        <div className="w-full h-[428px] flex gap-3">
          <div className="w-[850px] h-[430px]">
            <div className="w-full h-[65px] flex justify-between items-center border">
              <div className="w-fit h-full flex items-center justify-evenly border">
                {menuItems.map((item) => (
                  <div
                    key={item}
                    onClick={() => handleMenuClick(item)}
                    className={`text-[18px] font-bold cursor-pointer border border-l-0 border-t-0 border-b-0 p-[17px] ${
                      selectedMenu === item
                        ? "bg-[#ebfaff] text-[#0087FF]"
                        : "text-gray-800"
                    }`}
                  >
                    {item}
                  </div>
                ))}

                <div className="text-[18px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 p-[17px] w-fit h-full">
                  HOW TO BUY?
                </div>
              </div>
              <div className="w-fit h-full flex">
                <div
                  onClick={() => handleListAndMapClick("LIST")}
                  className={`w-1/2 h-full text-[18px] font-bold flex items-center justify-center gap-1 border border-t-0 border-b-0 p-[17px] cursor-pointer`}
                >
                  <ListIcon />
                  LIST
                </div>

                <div
                  onClick={() => handleListAndMapClick("MAP")}
                  className={`w-1/2 h-full text-[18px] font-bold flex items-center justify-center gap-1 p-[17px] cursor-pointer ${
                    selectedListAndMap === "MAP"
                      ? "bg-[#ebfaff] text-[#0087FF]"
                      : "text-gray-800"
                  }`}
                >
                  <Image
                    alt=""
                    src="/image/map-svgrepo-com 1.png"
                    width={24}
                    height={24}
                  />{" "}
                  MAP
                </div>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-[24px] py-[24px] px-4 ">
              <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
                <div className="text-gray-800 text-[20px] font-bold">
                  {selectedCard !== null && cardList[selectedCard - 1].title}
                </div>
                <div className="flex items-center">
                  <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
                </div>
              </div>

              <div className="w-full h-fit flex gap-[20px]">
                <div className="w-fit h-fit flex flex-col gap-6 pb-4">
                  {selectedCard !== null && (
                    <div className="w-[400px] h-[125px] text-sm font-medium text-gray-800">
                      {cardList[selectedCard - 1].content}
                    </div>
                  )}
                  {selectedCard !== null && (
                    <div className="w-[400px] h-fit flex flex-col gap-3">
                      <div className="w-full flex gap-1 text-gray-800 text-sm">
                        <PlaceIcon />
                        {cardList[selectedCard - 1].address}
                      </div>
                      <button className="w-[169px] h-[37px] text-center bg-[#0087FF] text-white font-semibold text-sm">
                        CHECK FOR DETAILS
                      </button>
                    </div>
                  )}
                </div>

                {/* card start */}

                <div className="w-fit h-fit flex gap-3 relative">
                  {visibleCards.map((card) => (
                    <div
                      key={card.id}
                      className={`w-[180px] h-[180px] border ${
                        selectedCard === card.id
                          ? "border-blue-500 shadow-inner shadow-blue-300"
                          : "border-gray-300"
                      } flex items-center justify-center cursor-pointer`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      {card.imgURL && (
                        <Image
                          alt=""
                          src={card.imgURL}
                          width={180}
                          height={180}
                        />
                      )}
                    </div>
                  ))}
                  {hiddenCardsCount > 0 && (
                    <div className="absolute w-[180px] h-[180px] bg-black/[0.5] border flex items-center justify-center text-white font-bold right-0">
                      +{hiddenCardsCount} MORE
                    </div>
                  )}
                </div>
                {/* card end */}
              </div>
            </div>
          </div>
          <div
            className="w-[428px] h-[430px]"
            onClick={() => handleListAndMapClick("MAP")}
          >
            <NominMap />
          </div>
        </div>
      ) : (
        // End google map chain

        // Start basic chain

        <div className="w-full h-[430px] border">
          <div className="w-full h-[65px] flex justify-between items-center border">
            <div className="w-fit h-full flex items-center justify-evenly border">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`text-[18px] font-bold cursor-pointer border border-l-0 border-t-0 border-b-0 p-[17px] ${
                    selectedMenu === item
                      ? "bg-[#ebfaff] text-[#0087FF]"
                      : "text-gray-800"
                  }`}
                >
                  {item}
                </div>
              ))}

              <div className="text-[18px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 p-[17px] w-fit h-full">
                HOW TO BUY?
              </div>
            </div>
            <div className="w-fit h-full flex">
              <div
                onClick={() => handleListAndMapClick("LIST")}
                className={`w-1/2 h-full text-[18px] font-bold flex items-center justify-center gap-1 border border-t-0 border-b-0 p-[17px] cursor-pointer ${
                  selectedListAndMap === "LIST"
                    ? "bg-[#ebfaff] text-[#0087FF]"
                    : "text-gray-800"
                }`}
              >
                <ListIcon />
                LIST
              </div>

              <div
                onClick={() => handleListAndMapClick("MAP")}
                className={`w-1/2 h-full text-[18px] font-bold flex items-center justify-center gap-1 p-[17px] cursor-pointer ${
                  selectedListAndMap === "MAP"
                    ? "bg-[#ebfaff] text-[#0087FF]"
                    : "text-gray-800"
                }`}
              >
                <Image
                  alt=""
                  src="/image/map-svgrepo-com 1.png"
                  width={24}
                  height={24}
                />{" "}
                MAP
              </div>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col gap-[24px] py-[24px] px-4 ">
            <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
              <div className="text-gray-800 text-[20px] font-bold">
                {selectedCard !== null && cardList[selectedCard - 1].title}
              </div>
              <div className="flex items-center">
                <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
              </div>
            </div>

            <div className="w-full h-fit flex gap-[20px]">
              <div className="w-fit h-fit flex flex-col gap-6 pb-4">
                {selectedCard !== null && (
                  <div className="w-[400px] h-[125px] text-sm font-medium text-gray-800">
                    {cardList[selectedCard - 1].content}
                  </div>
                )}
                {selectedCard !== null && (
                  <div className="w-[400px] h-fit flex flex-col gap-3">
                    <div className="w-full flex gap-1 text-gray-800 text-sm">
                      <PlaceIcon />
                      {cardList[selectedCard - 1].address}
                    </div>
                    <button className="w-[169px] h-[37px] text-center bg-[#0087FF] text-white font-semibold text-sm">
                      CHECK FOR DETAILS
                    </button>
                  </div>
                )}
              </div>

              {/* card start */}

              <div className="w-fit h-fit flex gap-3 relative">
                {cardList.map((card, index) => (
                  <div
                    key={card.id}
                    className={`w-[180px] h-[180px] border ${
                      selectedCard === card.id
                        ? "border-blue-500 shadow-inner shadow-blue-300"
                        : "border-gray-300" && index >= 4
                        ? "hidden"
                        : ""
                    } flex items-center justify-center cursor-pointer`}
                    onClick={() => handleCardClick(card.id)}
                  >
                    {card.imgURL && (
                      <Image
                        alt=""
                        src={card.imgURL}
                        width={180}
                        height={180}
                      />
                    )}
                  </div>
                ))}
                {moreCount > 0 && (
                  <div className="absolute w-[180px] h-[180px] bg-black/[0.5] border flex items-center justify-center text-white font-bold right-0">
                    +{moreCount} MORE
                  </div>
                )}
              </div>
              {/* card end */}
            </div>
          </div>
        </div>
        // End basic chain
      )}
    </div>
  );
}
