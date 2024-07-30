declare global {
  interface Window {
    initMap: () => void;
  }
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

export interface CardType {
  id: number;
  imgURL?: string;
  logoImgURL?: string;
  title: string;
  content: string;
  cuponContent: string;
  about: AboutType;
  contact: ContactType;
  shopping: ShoppingType;
  service: ServiceType;
  appBenefits: AplicationBenefitsType;
  consideration: ConsiderationType;
  mapURL: string;
}

export interface CardListType {
  museum: CardType[];
  culture: CardType[];
  vouchers: CardType[];
  upointcard: CardType[];
  dataSimcard: CardType[];
}

export const CardList: CardListType = {
  museum: [
    {
      id: 1,
      logoImgURL: "/image/chinggis-khaan-museum-logo.png",
      imgURL: "/image/chinggis-khaan-museum.png",
      title: "Museum",
      content:
        "Opening Date: The museum was inaugurated in 2020, Location: Ulaanbaatar, Mongolia, Purpose: To showcase the rich history and culture of Mongolia, with a special emphasis on Chinggis Khaan and the Mongol Empire.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
      },
      mapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11626.14657166165!2d106.9148724!3d47.9226227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693c7c74617c3%3A0xf69f7d1336167c9f!2sChinggis%20Khaan%20National%20Museum!5e0!3m2!1sen!2sus!4v1626274008177!5m2!1sen!2sus",
      contact: {
        phone: "+976 8888 8888",
        email: "Nominchain@nomin.com",
        address: "BZD - 7 khoroo, Ulaanbaatar 13345",
      },
      shopping: {
        text1: "All categories of groceries and drinks",
        text2: "All categories of household goods",
        text3: "Home and kitchen electronics",
        text4: "Flowers and souvenirs",
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
        text1: "Discount coupon book for over 10 brands...",
        text2: "Limited to one time per person, passport must be presented.",
      },
      consideration: {
        text1: "Limited to one time per person, passport must be presented.",
        text2: "",
      },
    },
    {
      id: 2,
      logoImgURL: "/image/cu-logo.png",
      title: "Museum 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptas fuga perferendis molestias quidem cum illum. Rerum, a modi.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
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
      mapURL: "https://www.google.com/maps/embed?pb=!1m18...",
    },
    // Add other museum items...
  ],
  culture: [
    {
      id: 1,
      logoImgURL: "/image/nomin-logo.png",
      imgURL: "/image/nomin-chain.png",
      title: "Culture",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptas fuga perferendis molestias quidem cum illum. Rerum, a modi.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
      },
      mapURL: "https://www.google.com/maps/place/NOMIN+Allmart/...",
      contact: {
        phone: "+976 8888 8888",
        email: "Nominchain@nomin.com",
        address: "BZD - 7 khoroo, Ulaanbaatar 13345",
      },
      shopping: {
        text1: "All categories of groceries and drinks",
        text2: "All categories of household goods",
        text3: "Home and kitchen electronics",
        text4: "Flowers and souvenirs",
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
        text1: "Discount coupon book for over 10 brands...",
        text2: "Limited to one time per person, passport must be presented.",
      },
      consideration: {
        text1: "Limited to one time per person, passport must be presented.",
        text2: "",
      },
    },
    {
      id: 2,
      logoImgURL: "/image/cu-logo.png",
      title: "CU convenience store",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptas fuga perferendis molestias quidem cum illum. Rerum, a modi.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
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
      mapURL: "https://www.google.com/maps/embed?pb=!1m18...",
    },
    // Add culture items...
  ],
  vouchers: [
    {
      id: 1,
      logoImgURL: "/image/nomin-logo.png",
      imgURL: "/image/nomin-chain.png",
      title: '"Nomin" chain supermarkets',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptas fuga perferendis molestias quidem cum illum. Rerum, a modi.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
      },
      mapURL: "https://www.google.com/maps/place/NOMIN+Allmart/...",
      contact: {
        phone: "+976 8888 8888",
        email: "Nominchain@nomin.com",
        address: "BZD - 7 khoroo, Ulaanbaatar 13345",
      },
      shopping: {
        text1: "All categories of groceries and drinks",
        text2: "All categories of household goods",
        text3: "Home and kitchen electronics",
        text4: "Flowers and souvenirs",
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
        text1: "Discount coupon book for over 10 brands...",
        text2: "Limited to one time per person, passport must be presented.",
      },
      consideration: {
        text1: "Limited to one time per person, passport must be presented.",
        text2: "",
      },
    },
    {
      id: 2,
      logoImgURL: "/image/cu-logo.png",
      title: "CU convenience store",
      content: "Nomin Supermarket first started its operations in [year]...",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
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
      mapURL: "https://www.google.com/maps/embed?pb=!1m18...",
    },
    // Add vouchers items...
  ],
  upointcard: [
    {
      id: 1,
      logoImgURL: "/image/nomin-logo.png",
      imgURL: "/image/nomin-chain.png",
      title: '"Nomin" chain supermarkets',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptas fuga perferendis molestias quidem cum illum. Rerum, a modi.",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
      },
      mapURL: "https://www.google.com/maps/place/NOMIN+Allmart/...",
      contact: {
        phone: "+976 8888 8888",
        email: "Nominchain@nomin.com",
        address: "BZD - 7 khoroo, Ulaanbaatar 13345",
      },
      shopping: {
        text1: "All categories of groceries and drinks",
        text2: "All categories of household goods",
        text3: "Home and kitchen electronics",
        text4: "Flowers and souvenirs",
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
        text1: "Discount coupon book for over 10 brands...",
        text2: "Limited to one time per person, passport must be presented.",
      },
      consideration: {
        text1: "Limited to one time per person, passport must be presented.",
        text2: "",
      },
    },
    {
      id: 2,
      logoImgURL: "/image/cu-logo.png",
      title: "CU convenience store",
      content: "Nomin Supermarket first started its operations in [year]...",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
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
      mapURL: "https://www.google.com/maps/embed?pb=!1m18...",
    },
    // Add upointcard items...
  ],
  dataSimcard: [
    {
      id: 1,
      logoImgURL: "/image/nomin-logo.png",
      imgURL: "/image/nomin-chain.png",
      title: '"Nomin" chain supermarkets',
      content: "Nomin Supermarket first started its operations in 1997...",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
      },
      mapURL: "https://www.google.com/maps/place/NOMIN+Allmart/...",
      contact: {
        phone: "+976 8888 8888",
        email: "Nominchain@nomin.com",
        address: "BZD - 7 khoroo, Ulaanbaatar 13345",
      },
      shopping: {
        text1: "All categories of groceries and drinks",
        text2: "All categories of household goods",
        text3: "Home and kitchen electronics",
        text4: "Flowers and souvenirs",
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
        text1: "Discount coupon book for over 10 brands...",
        text2: "Limited to one time per person, passport must be presented.",
      },
      consideration: {
        text1: "Limited to one time per person, passport must be presented.",
        text2: "",
      },
    },
    {
      id: 2,
      logoImgURL: "/image/cu-logo.png",
      title: "CU convenience store",
      content: "Nomin Supermarket first started its operations in [year]...",
      cuponContent: "Discount coupon book for over 10 brands...",
      about: {
        text1: "Nomin Supermarket first started its operations in 1997...",
        text2: "We deliver quality guaranteed and hygienic food...",
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
      mapURL: "https://www.google.com/maps/embed?pb=!1m18...",
    },
    // Add data sim items...
  ],
};
