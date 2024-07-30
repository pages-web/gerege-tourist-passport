export interface HotelCardType {
  id: number;
  imgURL?: string;
  title: string;
  content: string;
  address: string;
  mapURL: string;
  howToBuy: {
    howToBuy1: string;
    howToBuy2: {
      title: string;
      content: string;
    };
  };
}
export interface MuseumCardType {
  id: number;
  imgURL?: string;
  title: string;
  content: string;
  address: string;
  mapURL: string;
  howToBuy: {
    howToBuy1: string;
    howToBuy2: {
      title: string;
      content: string;
    };
  };
}
export interface RestaurantCardType {
  id: number;
  imgURL?: string;
  title: string;
  content: string;
  address: string;
  mapURL: string;
  howToBuy: {
    howToBuy1: string;
    howToBuy2: {
      title: string;
      content: string;
    };
  };
}

export const hotelCardList: HotelCardType[] = [
  {
    id: 1,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      howToBuy2: {
        title: "Contact us directly on social media for free delivery.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12495.093269597498!2d106.8924349!3d47.9204646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96926b9ffe8f85%3A0x701ac17f45c1ad2c!2sНомин%20Супермаркет!5e0!3m2!1sen!2sus!4v1626885445863!5m2!1sen!2sus",
  },
  {
    id: 2,
    imgURL: "/image/cu-logo.png",
    title: "CU convenience store",
    content:
      "Nomin Supermarket first started its operations in [year] at the [store location]. In the [number] years since its opening, it has grown to [number] branches nationwide, offering [services/products].",
    address: "1234 Main Street, Anytown, USA",
    howToBuy: {
      howToBuy1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      howToBuy2: {
        title: "Contact us directly on social media for free delivery.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15369.956933420477!2d106.8842751!3d47.9180893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96931a8452590d:0xd23f65ae76cb1aa3!2sCU%20Mongol%203%20-%20Central%20Tower!5e0!3m2!1sen!2sus!4v1630939299898!5m2!1sen!2sus",
  },
  {
    id: 3,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9204646,106.8924349,14z/data=!4m10!1m2!2m1!1snomin+supermarket!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!15sChFub21pbiBzdXBlcm1hcmtldCIDiAEBWhMiEW5vbWluIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXTgAQA!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 4,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 5,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL: "",
  },
  {
    id: 6,
    imgURL: "/image/nomin-logo.png",
    title: '"Nomin" chain supermarkets',
    content:
      "Nomin Supermarket first started its operations in 1997 in the Nomin Plaza branch in the 14th district of Bayangol district. In the 30 years since its opening, it has 19 branches in Ulaanbaatar city and 3 branches in the local area, totaling 22 branches and wholesale trade.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  // Add more HOTEL data
];
export const restaurantCardList: RestaurantCardType[] = [
  {
    id: 1,
    imgURL: "/image/nomin-logo.png",
    title: "Nomin Supermarket",
    content:
      "Nomin Supermarket, established in 1997, has expanded significantly with multiple branches across Ulaanbaatar. Known for its comprehensive selection of goods, Nomin has become a staple for local residents and visitors alike.",
    address:
      "1406, Pro One Office, 11th khoroo, Sukhbaata District, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      howToBuy2: {
        title: "Contact us directly on social media for free delivery.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9204646,106.8924349,14z/data=!4m10!1m2!2m1!1snomin+supermarket!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!15sChFub21pbiBzdXBlcm1hcmtldCIDiAEBWhMiEW5vbWluIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXTgAQA!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 2,
    imgURL: "/image/cu-logo.png",
    title: "CU RESTAURANT & Store",
    content:
      "CU is a popular chain offering a variety of food and beverages. With numerous locations, it provides convenience and quality to its customers, making it a favorite choice for quick meals and groceries.",
    address: "2345 Elm Street, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.791457760266!2d106.93969151554367!3d47.92178777920444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923c54f3af27%3A0x4d7a4bb2ef5bbf98!2sNomin%20Supermarket!5e0!3m2!1sen!2smn!4v1624029134658!5m2!1sen!2smn",
  },
  {
    id: 3,
    imgURL: "/image/nomin-logo.png",
    title: "Ulaanbaatar RESTAURANT",
    content:
      "Located in the heart of Ulaanbaatar, this RESTAURANT has been serving traditional Mongolian cuisine for over two decades. It's known for its warm ambiance and delicious dishes made from locally sourced ingredients.",
    address: "4567 Peace Avenue, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9204646,106.8924349,14z/data=!4m10!1m2!2m1!1snomin+supermarket!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!15sChFub21pbiBzdXBlcm1hcmtldCIDiAEBWhMiEW5vbWluIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXTgAQA!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 4,
    imgURL: "/image/nomin-logo.png",
    title: "Mongolian Delights",
    content:
      "Mongolian Delights offers an authentic dining experience with a focus on traditional dishes. Located centrally in Ulaanbaatar, this RESTAURANT provides a comfortable setting for both locals and tourists.",
    address: "7890 Heritage Road, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 5,
    imgURL: "/image/nomin-logo.png",
    title: "Bayangol Bistro",
    content:
      "Bayangol Bistro provides a cozy atmosphere with a diverse menu that caters to various tastes. It has become a popular spot for both casual dining and special occasions in Ulaanbaatar.",
    address: "8901 Central Avenue, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL: "",
  },
  {
    id: 6,
    imgURL: "/image/nomin-logo.png",
    title: "Mongolian Feast",
    content:
      "Known for its hearty Mongolian dishes and friendly service, Mongolian Feast is a beloved local RESTAURANT. It offers a rich menu of traditional dishes in a welcoming environment.",
    address: "2345 Victory Street, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  // Add more RESTAURANT data as needed
];

export const museumCardList: MuseumCardType[] = [
  {
    id: 1,
    imgURL: "/image/national-museum.png",
    title: "National MUSEUM of Mongolia",
    content:
      "The National MUSEUM of Mongolia, established in 1924, is the country's premier MUSEUM showcasing Mongolia's rich cultural heritage, history, and art. The MUSEUM houses a vast collection of artifacts from prehistoric to modern times.",
    address: "13 Баруун 4 зам, Ulaanbaatar 14201, Mongolia",
    howToBuy: {
      howToBuy1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      howToBuy2: {
        title: "Contact us directly on social media for free delivery.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.954724253378!2d106.90546119999999!3d47.9218998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692437c6103b1%3A0xa37869e2487cc99!2sNational%20Museum%20of%20Mongolia!5e0!3m2!1sen!2s!4v1690812857390!5m2!1sen!2s",
  },
  {
    id: 2,
    imgURL: "/image/cu-logo.png",
    title: "Mongolian Fine Arts MUSEUM",
    content:
      "The Mongolian Fine Arts MUSEUM, opened in 1966, features a diverse collection of traditional and contemporary Mongolian art. It is renowned for its exquisite displays of Mongolian paintings, sculptures, and crafts.",
    address: "22 Gandan Street, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.791457760266!2d106.93969151554367!3d47.92178777920444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923c54f3af27%3A0x4d7a4bb2ef5bbf98!2sMongolian%20Fine%20Arts%20Museum!5e0!3m2!1sen!2smn!4v1624029134658!5m2!1sen!2smn",
  },
  {
    id: 3,
    imgURL: "/image/nomin-logo.png",
    title: "Choijin Lama Temple MUSEUM",
    content:
      "The Choijin Lama Temple MUSEUM, established in 1904, offers insights into Mongolia's Buddhist heritage. The MUSEUM is housed in a beautifully preserved temple and features intricate religious artifacts and traditional art.",
    address: "MUSEUM Hill, Ulaanbaatar 14201, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.791457760266!2d106.93969151554367!3d47.92178777920444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923c54f3af27%3A0x4d7a4bb2ef5bbf98!2sChoijin%20Lama%20Temple%20Museum!5e0!3m2!1sen!2smn!4v1624029134658!5m2!1sen!2smn",
  },
  {
    id: 4,
    imgURL: "/image/nomin-logo.png",
    title: "Zaisan Memorial MUSEUM",
    content:
      "The Zaisan Memorial MUSEUM, dedicated in 1971, commemorates the Soviet-Mongolian friendship and features exhibits on the history of the Soviet-Mongolian alliance. It offers panoramic views of Ulaanbaatar from its hilltop location.",
    address: "Zaisan Hill, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/Zaisan+Memorial+MUSEUM/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  {
    id: 5,
    imgURL: "/image/nomin-logo.png",
    title: "Mongolian Natural History MUSEUM",
    content:
      "The Mongolian Natural History MUSEUM, founded in 1924, is known for its extensive collection of fossils, minerals, and biological specimens. It provides a comprehensive overview of Mongolia's natural history and biodiversity.",
    address: "14 Khoroo, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL: "",
  },
  {
    id: 6,
    imgURL: "/image/nomin-logo.png",
    title: "Mongolian Railway MUSEUM",
    content:
      "The Mongolian Railway MUSEUM, established in 2000, showcases the history of rail transport in Mongolia. The MUSEUM features vintage locomotives, historical artifacts, and exhibits on the development of the railway system.",
    address: "Railway Station, Ulaanbaatar, Mongolia",
    howToBuy: {
      howToBuy1: "",
      howToBuy2: {
        title: "",
        content: "",
      },
    },
    mapURL:
      "https://www.google.com/maps/place/Mongolian+Railway+MUSEUM/@47.9276551,106.9247362,444m/data=!3m1!1e3!4m14!1m7!3m6!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!2z0J3QvtC80LjQvSDQodGD0L_QtdGA0LzQsNGA0LrQtdGC!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu",
  },
  // Add more MUSEUM data if needed
];
