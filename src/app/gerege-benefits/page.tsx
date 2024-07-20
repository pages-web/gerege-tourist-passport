"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
import BuyButton from "@/component/buy-button/page";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const navItems = [
  { name: "ALL", icon: "/image/flag.png", href: "" },
  { name: "MUSEUM", icon: "/image/museum.png", href: "" },
  { name: "CULTURE", icon: "/image/flag.png", href: "" },
  { name: "VOUCHERS", icon: "/image/museum.png", href: "" },
  { name: "U POINT CARD", icon: "/image/museum.png", href: "" },
  { name: "DATA SIM", icon: "/image/museum.png", href: "" },
];

declare global {
  interface Window {
    initMap: () => void;
  }
}

interface CardType {
  id: number;
  imgURL?: string;
  title: string;
  content: string;
  cuponContent: string;
  about: AboutType;
  contact: ContactType;
  shopping: ShoppingType;
  service: ServiceType;
  appBenefits: AplicationBenefitsType;
  consideration: ConsiderationType;
}
interface ContactType {
  phone: string;
  email: string;
  address: string;
}

interface ShoppingType {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
}
interface ServiceType {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
}
interface AplicationBenefitsType {
  text1: string;
  text2: string;
}
interface ConsiderationType {
  text1: string;
  text2: string;
}
interface AboutType {
  text1: string;
  text2: string;
}

const cardList: CardType[] = [
  {
    id: 1,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },

    contact: {
      phone: "+976 8888 8888",
      email: "Nominchain@nomin.com",
      address: "BZD - 7 khoroo, Ulaanbaatar 13345",
    },
    shopping: {
      text1: "All categories of groceries and drinks",
      text2: "All categories of household goods",
      text3: "Home and kitchen electronics",
      text4: "Flowers and souvernirs",
      text5: "Bakery",
      text6: "",
      text7: "",
    },
    service: {
      text1: "АТМ",
      text2: "/Pick Pack/",
      text3: "International food court",
      text4: "Dry cleaning",
      text5: "Repair services",
      text6: "Cellular operator",
      text7: "CASH BANK",
    },
    appBenefits: {
      text1:
        "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
      text2: "Limited to one time per person, passport must be presented.",
    },
    consideration: {
      text1: "Limited to one time per person, passport must be presented.",
      text2: "",
    },
  },
  {
    id: 2,
    imgURL: "/image/cu-logo.png",
    title: "CU convenience store",
    content:
      "Nomin Supermarket first started its operations in [year] at the [store location]. In the [number] years since its opening, it has grown to [number] branches nationwide, offering [services/products].",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },
    contact: {
      phone: "8888888",
      email: "",
      address: "",
    },
    shopping: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    appBenefits: {
      text1: "",
      text2: "",
    },
    consideration: {
      text1: "",
      text2: "",
    },
  },
  {
    id: 3,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },
    contact: {
      phone: "8888888",
      email: "",
      address: "",
    },
    shopping: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    appBenefits: {
      text1: "",
      text2: "",
    },
    consideration: {
      text1: "",
      text2: "",
    },
  },
  {
    id: 4,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },
    contact: {
      phone: "8888888",
      email: "",
      address: "",
    },
    shopping: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    appBenefits: {
      text1: "",
      text2: "",
    },
    consideration: {
      text1: "",
      text2: "",
    },
  },
  {
    id: 5,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },
    contact: {
      phone: "8888888",
      email: "",
      address: "",
    },
    shopping: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    appBenefits: {
      text1: "",
      text2: "",
    },
    consideration: {
      text1: "",
      text2: "",
    },
  },
  {
    id: 6,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about: {
      text1:
        "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches. and wholesale trade.",
      text2:
        "We deliver quality guaranteed and hygienic food, household, and electronic goods to more than 20,000 customers. In 2022, Nomin Supermarket Nomunvillage and in July 2023, Nomin Supermarket Belh Branch are successfully opened.",
    },
    contact: {
      phone: "8888888",
      email: "",
      address: "",
    },
    shopping: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    },
    appBenefits: {
      text1: "",
      text2: "",
    },
    consideration: {
      text1: "",
      text2: "",
    },
  },
];

export default function GeregeBenefits() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedItem, setClickedItem] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Search query:", searchQuery);
  };

  const handleItemClick = (index: number) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  const filteredCards = cardList.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Dynamically create the script tag to load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Define the initMap function on the window object
    window.initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        const map = new google.maps.Map(mapElement as HTMLElement, {
          center: { lat: 47.9243792, lng: 106.9380916 },
          zoom: 14.38,
        });

        new google.maps.Marker({
          position: { lat: 47.9243792, lng: 106.9380916 },
          map: map,
          title: "Nomin Supermarket",
        });
      }
    };
  }, []);

  return (
    <div className="w-[1200px] h-fit mx-auto mt-12 mb-12 border">
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
          <Link key={index} href={item.href}>
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
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-between items-center mb-8">
        <div className="text-gray-600 text-[17px] font-semibold mt-4">
          Find out benefits from{" "}
          <span className="text-blue-600">{filteredCards.length}</span> brands
        </div>

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
        <div className="w-full h-fit flex flex-col gap-[80px] mt-6 p-4 border border-gray-200">
          {/* coupon */}
          <div className="w-full h-[100px] flex items-center pl-8 gap-[30px] bg-gray-200">
            <div className="w-[52px] h-[52px] bg-black"></div>
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
                  <BuyButton />
                </div>
              </div>
              <div className="w-[600px] h-[350px] border border-black">
                <Image alt="" src="" />
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
                <LocalPhoneIcon className="w-[21px] h-[21px]" />
                <div className="text-gray-600 text-[14px]">
                  {selectedCard.contact.phone}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="w-[21px] h-[21px]" />
                <div className="text-gray-600 text-[14px]">
                  {selectedCard.contact.email}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LocationOnIcon className="w-[21px] h-[21px]" />
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
            {/* Aplication benefits */}
            <div className="w-full h-fit bg-gray-200 flex items-center gap-5 p-7">
              <div>icon</div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-800 font-bold text-[17px]">
                  Aplication benefits
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
              <div>icon</div>
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

          {/* Map */}
          <div id="map" className="w-full h-[400px] border border-black"></div>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col gap-2">
          {filteredCards.slice(0, visibleCount).map((card) => (
            <div
              key={card.id}
              className="w-full h-[200px] flex gap-8 bg-gray-50 pt-2 cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div className="w-[200px] h-[180px] border border-gray-200 flex items-center justify-center">
                {card.imgURL && (
                  <Image alt="" src={card.imgURL} width={180} height={180} />
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
