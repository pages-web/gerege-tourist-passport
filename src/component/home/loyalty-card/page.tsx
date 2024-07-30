"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ListIcon from "@mui/icons-material/List";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { hotelCardList, museumCardList, restaurantCardList } from "./CardList";

const menuItems = ["HOTEL", "RESTAURANT", "MUSEUM"];

const LoyaltyCard = () => {
  const [selectedMenu, setSelectedMenu] = useState("HOTEL");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showHowToBuy, setShowHowToBuy] = useState(false);
  const [selectedListAndMap, setSelectedListAndMap] = useState("LIST");

  useEffect(() => {
    if (selectedMenu === "HOTEL" && hotelCardList.length > 0) {
      setSelectedCard(hotelCardList[0].id);
    } else if (selectedMenu === "RESTAURANT" && restaurantCardList.length > 0) {
      setSelectedCard(restaurantCardList[0].id);
    } else if (selectedMenu === "MUSEUM" && museumCardList.length > 0) {
      setSelectedCard(museumCardList[0].id);
    }
  }, [selectedMenu]);

  const handleMenuClick = (item: any) => {
    setSelectedMenu(item);
    setSelectedCard(null);
    setShowHowToBuy(false);
  };

  const handleCardClick = (id: any) => {
    setSelectedCard(id);
  };

  const handleListAndMapClick = (view: any) => {
    setSelectedListAndMap(view);
  };

  const getCardList = () => {
    switch (selectedMenu) {
      case "HOTEL":
        return hotelCardList;
      case "RESTAURANT":
        return restaurantCardList;
      case "MUSEUM":
        return museumCardList;
      default:
        return [];
    }
  };

  const handleHowToBuy = () => {
    setShowHowToBuy(true);
  };

  const visibleCards = getCardList().filter((card, index) => {
    if (selectedListAndMap === "MAP") {
      return index < 2;
    }
    return index < 4;
  });
  const hiddenCardsCount = getCardList().length - visibleCards.length;

  // How to buy
  const renderSelectedCardDetails = () => {
    const cardList = getCardList();
    const selectedCardData =
      selectedCard !== null &&
      getCardList().find((card) => card.id === selectedCard);

    const selectedIndices = [0, 1, 2].map((index) => cardList[index]);

    return selectedIndices.map((card, index) => (
      <div key={index} className="flex flex-col items-center gap-[10px]">
        <div className="flex items-center justify-center border w-[185px] h-[130px]">
          {selectedCardData && (
            <Image
              alt=""
              src={selectedCardData.imgURL || ""}
              width={120}
              height={80}
            />
          )}
        </div>
        <div className="flex">
          <LocationOnIcon className="text-gray-700" />
          <div className="w-[170px] h-[45px] text-gray-800 font-medium text-[12px] leading-[16px]">
            {card ? card.address : "No address available"}
          </div>
        </div>
      </div>
    ));
  };

  // const convertGoogleMapsUrlToIframe = (url: string): string => {
  //   try {
  //     const urlObj = new URL(url);
  //     const pathname = urlObj.pathname;
  //     const searchParams = new URLSearchParams(urlObj.search);

  //     if (pathname.includes("/embed/")) {
  //       return url;
  //     }

  //     if (pathname.includes("/place/") || pathname.includes("/maps/")) {
  //       const latLngMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  //       if (latLngMatch) {
  //         const lat = latLngMatch[1];
  //         const lng = latLngMatch[2];
  //         return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${lat},${lng}`;
  //       }

  //       const placeId = searchParams.get("cid") || searchParams.get("q");
  //       if (placeId) {
  //         return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${placeId}`;
  //       }
  //       return `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${latLngMatch?.[1]},${latLngMatch?.[2]}&zoom=14`;
  //     }

  //     return url;
  //   } catch (error) {
  //     console.error("Error converting Google Maps URL to iframe URL:", error);
  //     return url;
  //   }
  // };

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
        // Start google map
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
                <div
                  onClick={handleHowToBuy}
                  className="text-[18px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 p-[17px] w-fit h-full cursor-pointer"
                >
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

            <div className="w-full h-fit flex flex-col gap-[24px] py-[24px] px-4">
              <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
                <div className="text-gray-800 text-[20px] font-bold">
                  {selectedCard !== null &&
                    getCardList().find((card) => card.id === selectedCard)
                      ?.title}
                </div>
                <div className="flex items-center">
                  <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
                </div>
              </div>

              <div className="w-full h-fit flex gap-[20px]">
                <div className="w-fit h-fit flex flex-col gap-6 pb-4">
                  {selectedCard !== null && (
                    <div className="w-[400px] h-[125px] text-sm font-medium text-gray-800">
                      {
                        getCardList().find((card) => card.id === selectedCard)
                          ?.content
                      }
                    </div>
                  )}
                  {selectedCard !== null && (
                    <div className="w-[400px] h-fit flex flex-col gap-3">
                      <div className="w-full flex gap-1 text-gray-800 text-sm">
                        <PlaceIcon />
                        {
                          getCardList().find((card) => card.id === selectedCard)
                            ?.address
                        }
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
            {selectedCard !== null && (
              <iframe
                src={
                  getCardList().find((card) => card.id === selectedCard)?.mapURL
                }
                // src={convertGoogleMapsUrlToIframe(
                //   getCardList().find((card) => card.id === selectedCard)
                //     ?.mapURL || ""
                // )}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      ) : (
        // End google map

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
              <div
                onClick={handleHowToBuy}
                className="cursor-pointer text-[18px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 p-[17px] w-fit h-full"
              >
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

          {/* Start How to buy? */}

          {showHowToBuy ? (
            <div className="flex w-full h-[430px] gap-6 p-6">
              <div className="w-1/2 h-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="text-gray-600 font-semibold text-xl ml-2">
                    1.{" "}
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.title
                    }
                  </div>
                  <div
                    className="text-gray-600 font-normal text-base w-full h-[80px] leading-5"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.howToBuy.howToBuy1
                    }
                  </div>
                </div>
                <div className="flex">{renderSelectedCardDetails()}</div>
              </div>
              <div className="w-1/2 h-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-gray-600 font-semibold text-xl ml-2">
                    2.{" "}
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.howToBuy.howToBuy2.title
                    }{" "}
                  </div>
                  <div
                    className="text-gray-600 font-normal text-base w-full h-[62px] leading-5"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.howToBuy.howToBuy2.content
                    }
                  </div>
                </div>
                <div className="w-[190px] h-[170px] border flex items-center justify-center">
                  {" "}
                  {selectedCard !== null &&
                    getCardList().find((card) => card.id === selectedCard) && (
                      <Image
                        alt=""
                        src={
                          getCardList().find((card) => card.id === selectedCard)
                            ?.imgURL || ""
                        }
                        width={180}
                        height={120}
                      />
                    )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-fit flex flex-col gap-[24px] py-[24px] px-4 border">
              <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
                <div className="text-gray-800 text-[20px] font-bold">
                  {selectedCard !== null &&
                    getCardList().find((card) => card.id === selectedCard)
                      ?.title}
                </div>
                <div className="flex items-center">
                  <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
                </div>
              </div>

              <div className="w-full h-fit flex gap-[20px]">
                <div className="w-fit h-fit flex flex-col gap-6 pb-4">
                  {selectedCard !== null && (
                    <div className="w-[400px] h-[125px] text-sm font-medium text-gray-800">
                      {
                        getCardList().find((card) => card.id === selectedCard)
                          ?.content
                      }
                    </div>
                  )}
                  {selectedCard !== null && (
                    <div className="w-[400px] h-fit flex flex-col gap-3">
                      <div className="w-full flex gap-1 text-gray-800 text-sm">
                        <PlaceIcon />
                        {
                          getCardList().find((card) => card.id === selectedCard)
                            ?.address
                        }
                      </div>
                      <button className="w-[169px] h-[37px] text-center bg-[#0087FF] text-white font-semibold text-sm">
                        CHECK FOR DETAILS
                      </button>
                    </div>
                  )}
                </div>

                {/* card start */}
                <div className="w-fit h-fit flex gap-3 relative">
                  {getCardList().map((card, index) => (
                    <div
                      key={card.id}
                      className={`w-[180px] h-[180px] border ${
                        selectedCard === card.id
                          ? "border-blue-500 shadow-inner shadow-blue-300"
                          : "border-gray-300"
                      } ${
                        index >= 4 ? "hidden" : ""
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
          )}
        </div>
      )}
    </div>
  );
};

export default LoyaltyCard;
