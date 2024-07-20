import React from "react";

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
}
interface ServiceType {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
interface AplicationBenefitsType {
  text1: string;
  text2: string;
}
interface ConsiderationType {
  text1: string;
  text2: string;
}

interface CardType {
  id: number;
  imgURL?: string;
  cuponContent: string;
  title: string;
  about: string;
  contact: ContactType;
  shopping: ShoppingType;
  service: ServiceType;
  appBenefits: AplicationBenefitsType;
  consideration: ConsiderationType;
}

const cardList: CardType[] = [
  {
    id: 1,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    cuponContent:
      "Discount coupon book for over 10 brands (outlet price + up to 10% additional discount, 1 coffee coupon)",
    about:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
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
    },
    service: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
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

export default function CardDetails() {
  return <div></div>;
}
