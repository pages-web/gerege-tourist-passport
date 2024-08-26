"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ListIcon from "@mui/icons-material/List";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { hotelCardList, museumCardList, restaurantCardList } from "./CardList";
import { useTranslations } from "next-intl";

const menuItems = ["HOTEL", "RESTAURANT", "MUSEUM"];

const LoyaltyCard = () => {
  const [selectedMenu, setSelectedMenu] = useState("HOTEL");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showHowToBuy, setShowHowToBuy] = useState(false);
  const [selectedListAndMap, setSelectedListAndMap] = useState("LIST");
  const t = useTranslations("LoyaltyCard");

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
        <div className="flex items-center justify-center border lg:w-[185px] lg:h-[130px]">
          {selectedCardData && (
            <Image
              alt=""
              src={selectedCardData.imgURL || ""}
              width={120}
              height={80}
              className="lg:w-[120px] w-[100px] lg:h-[80px] h-[80px]"
            />
          )}
        </div>
        <div className="flex">
          <LocationOnIcon className="text-gray-700 lg:w-[24px] w-[16px] lg:h-[24px] h-[16px]" />
          <div className="lg:w-[170px] w-[100px] lg:h-[45px] h-fit text-gray-800 font-medium lg:text-[12px] text-[9px] lg:leading-[16px] leading-3">
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
    <div className="lg:w-[1200px] w-[389px] h-fit flex flex-col justify-between gap-6 m-auto lg:mb-[60px] mb-[40px]">
      <div className="text-center">
        <div className="text-gray-800 lg:text-[22px] text-[16px] font-bold">
          {t("title")}
        </div>
        <div className="lg:text-[18px] text-[14px] text-gray-600 font-normal">
          {t("subtitle")}
        </div>
      </div>

      {/* menu start */}
      {selectedListAndMap === "MAP" ? (
        // Start clicked google map
        <div className="lg:w-full w-[389px] lg:h-[430px] h-fit lg:flex lg:flex-nowrap gap-5 flex flex-wrap">
          <div className="lg:w-[810px] w-full lg:h-[430px] h-fit border">
            <div className="w-full lg:h-[65px] h-fit flex lg:justify-between lg:items-center flex-wrap gap-2 justify-end border py-2">
              <div className="lg:w-fit w-[389px] h-full flex items-center justify-evenly">
                {menuItems.map((item) => (
                  <div
                    key={item}
                    onClick={() => handleMenuClick(item)}
                    className={`lg:text-[18px] text-[14px] font-bold cursor-pointer border border-l-0 border-t-0 border-b-0 lg:p-[17px] p-2 ${
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
                  className="lg:text-[18px] text-[13px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 lg:p-[17px] p-2 w-fit h-full cursor-pointer"
                >
                  HOW TO BUY?
                </div>
              </div>
              <div className="w-fit h-full flex items-center gap-2 lg:mr-0 mr-4">
                <div
                  onClick={() => handleListAndMapClick("LIST")}
                  className={`w-1/2 h-full lg:text-[18px] text-[14px] font-bold flex items-center justify-center gap-1 border border-t-0 border-b-0 lg:p-[17px] p-2 cursor-pointer`}
                >
                  <ListIcon />
                  LIST
                </div>
                <div
                  onClick={() => handleListAndMapClick("MAP")}
                  className={`w-1/2 h-full lg:text-[18px] text-[14px] font-bold flex items-center justify-center gap-1 lg:p-[17px] p-2 cursor-pointer ${
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
                    className="lg:w-[24px] w-[20px] lg:h-[24px] h-[20px]"
                  />{" "}
                  MAP
                </div>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-[24px] py-[24px] lg:px-4 px-2">
              <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
                <div className="text-gray-800 lg:text-[20px] text-[15px] font-bold">
                  {selectedCard !== null &&
                    getCardList().find((card) => card.id === selectedCard)
                      ?.title}
                </div>
                <div className="flex items-center">
                  <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
                </div>
              </div>

              <div className="w-full h-fit flex lg:gap-5 gap-10 border">
                <div className="lg:w-fit w-[350px] h-fit flex flex-col gap-6 pb-4">
                  {selectedCard !== null && (
                    <div className="lg:w-[400px] w-full lg:h-[125px] h-fit lg:text-sm text-[12px] lg:leading-5 leading-4 font-medium text-gray-800">
                      {
                        getCardList().find((card) => card.id === selectedCard)
                          ?.content
                      }
                    </div>
                  )}
                  {selectedCard !== null && (
                    <div className="lg:w-[400px] w-full h-fit flex flex-col gap-3">
                      <div className="w-full flex gap-1 text-gray-800 lg:text-sm text-[11px]">
                        <PlaceIcon className="lg:w-[24px] w-[16px] lg:h-[24px] h-[16px]" />
                        {
                          getCardList().find((card) => card.id === selectedCard)
                            ?.address
                        }
                      </div>
                      {/* <button className="lg:w-[169px] w-[100px] lg:h-[37px] h-[25px] text-center bg-[#0087FF] text-white font-semibold lg:text-sm text-[9px]">
                        CHECK FOR DETAILS
                      </button> */}
                    </div>
                  )}
                </div>

                {/* card start */}
                <div className="w-fit h-fit lg:flex lg:flex-nowrap gap-3 flex flex-wrap-reverse relative">
                  {visibleCards.map((card) => (
                    <div
                      key={card.id}
                      className={`lg:w-[180px] w-[140px] lg:h-[185px] h-[140px] border ${
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
                          className="lg:w-[180px] w-[120px] lg:h-[180px] h-[120px]"
                        />
                      )}
                    </div>
                  ))}
                  {hiddenCardsCount > 0 && (
                    <div className="absolute lg:w-[180px] w-[140px] lg:h-[185px] h-[140px] bg-black/[0.5] border flex items-center justify-center text-white font-bold lg:right-0 right-[10px]">
                      +{hiddenCardsCount} MORE
                    </div>
                  )}
                </div>
                {/* card end */}
              </div>
            </div>
          </div>
          <div
            className="lg:w-[400px] w-[389px] lg:h-[429px] h-[260px]"
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
        // End clicked google map

        // Start basic chain
        <div className="lg:w-full w-[389px] h-fit border">
          <div className="w-full lg:h-[65px] h-fit flex lg:justify-between lg:items-center flex-wrap gap-2 justify-end border">
            <div className="w-fit h-full flex items-center justify-evenly">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`lg:text-[18px] text-[14px] font-bold cursor-pointer border border-l-0 border-t-0 border-b-0 lg:p-[17px] p-2 ${
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
                className="cursor-pointer lg:text-[18px] text-[13px] text-[#0087FF] font-bold border border-l-0 border-t-0 border-b-0 p-[17px] w-fit h-full"
              >
                HOW TO BUY?
              </div>
            </div>
            <div className="w-fit h-full flex items-center gap-2 lg:mr-0 mr-4">
              <div
                onClick={() => handleListAndMapClick("LIST")}
                className={`w-1/2 h-full lg:text-[18px] text-[14px] font-bold flex items-center justify-center gap-1 border border-t-0 border-b-0 lg:p-[17px] p-2 cursor-pointer ${
                  selectedListAndMap === "LIST"
                    ? "bg-[#ebfaff] text-[#0087FF]"
                    : "text-gray-800"
                }`}
              >
                <ListIcon className="lg:w-[30px] w-[26px] lg:h-[30px] h-[26px]" />
                LIST
              </div>
              <div
                onClick={() => handleListAndMapClick("MAP")}
                className={`w-1/2 h-full lg:text-[18px] text-[14px] font-bold flex items-center justify-center gap-1 lg:p-[17px] p-1 cursor-pointer ${
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
                  className="lg:w-[24px] w-[20px] lg:h-[24px] h-[20px]"
                />{" "}
                MAP
              </div>
            </div>
          </div>

          {/* Start How to buy? */}
          {showHowToBuy ? (
            <div className="lg:flex lg:flex-nowrap flex flex-wrap w-full h-fit lg:gap-6 gap-10 lg:p-6 p-3 border">
              <div className="lg:w-1/2 w-full h-fit flex flex-col gap-5">
                <div className="flex h-fit flex-col gap-2">
                  <div className="text-gray-600 font-semibold lg:text-xl text-[14px] ml-2">
                    1.{" "}
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.title
                    }
                  </div>
                  <div className="text-gray-600 font-normal lg:text-base text-[12px] w-full h-fit lg:leading-5 leading-4">
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.howToBuy.howToBuy1
                    }
                  </div>
                </div>
                <div className="flex">{renderSelectedCardDetails()}</div>
              </div>
              <div className="lg:w-1/2 w-full lg:h-full h-fit flex flex-col lg:gap-6 gap-3">
                <div className="flex flex-col gap-2">
                  <div className="text-gray-600 font-semibold lg:text-xl text-[14px] ml-2">
                    2.{" "}
                    {
                      getCardList().find((card) => card.id === selectedCard)
                        ?.howToBuy.howToBuy2.title
                    }{" "}
                  </div>
                  <div
                    className="text-gray-600 font-normal lg:text-base text-[11px] w-full h-[62px] lg:leading-5 leading-3"
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
                <div className="lg:w-[190px] w-[150px] lg:h-[170px] h-[105px] border flex items-center justify-center">
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
                        className="lg:w-[180px] w-[120px] lg:h-[120px] h-[100px]"
                      />
                    )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-fit flex flex-col gap-[24px] lg:py-[24px] lg:px-4 px-2 border">
              <div className="w-full h-fit flex justify-between py-3 border border-t-0 border-l-0 border-r-0">
                <div className="text-gray-800 lg:text-[20px] text-[15px] font-bold">
                  {selectedCard !== null &&
                    getCardList().find((card) => card.id === selectedCard)
                      ?.title}
                </div>
                <div className="flex items-center">
                  <KeyboardArrowLeftIcon />-<KeyboardArrowRightIcon />
                </div>
              </div>

              <div className="w-full h-fit flex lg:gap-[20px] gap-3">
                <div className="w-fit h-fit flex flex-col gap-6 pb-4">
                  {selectedCard !== null && (
                    <div className="lg:w-[400px] w-[150px] lg:h-[125px] h-fit lg:text-sm text-[10px] font-medium text-gray-800">
                      {
                        getCardList().find((card) => card.id === selectedCard)
                          ?.content
                      }
                    </div>
                  )}
                  {selectedCard !== null && (
                    <div className="lg:w-[400px] w-[150px] h-fit flex flex-col lg:gap-3 gap-1">
                      <div className="w-full flex gap-1 text-gray-800 lg:text-sm text-[10px]">
                        <PlaceIcon className="lg:w-[24px] w-[16px] lg:h-[24px] h-[16px]" />
                        {
                          getCardList().find((card) => card.id === selectedCard)
                            ?.address
                        }
                      </div>
                      {/* <button className="lg:w-[169px] w-[100px] lg:h-[37px] h-[20px] text-center bg-[#0087FF] text-white font-semibold lg:text-sm text-[8px]">
                        CHECK FOR DETAILS
                      </button> */}
                    </div>
                  )}
                </div>

                {/* card start */}
                <div className="lg:w-fit w-[206px] lg:h-[181px] h-[210px] lg:flex lg:flex-nowrap lg:gap-3 flex flex-wrap-reverse gap-1 relative">
                  {getCardList().map((card, index) => (
                    <div
                      key={card.id}
                      className={`lg:w-[180px] w-[100px] lg:h-[185px] h-[105px] border ${
                        selectedCard === card.id
                          ? "border-blue-500 ring-2"
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
                          className="lg:w-[180px] w-[100px] lg:h-[180px] h-[100px]"
                        />
                      )}
                    </div>
                  ))}
                  {hiddenCardsCount > 0 && (
                    <div className="absolute z-10 lg:w-[180px] w-[101px] lg:h-[180px] h-[106px] bg-black/[0.5] border flex items-center justify-center text-white font-bold lg:right-0 right-[2px]">
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
