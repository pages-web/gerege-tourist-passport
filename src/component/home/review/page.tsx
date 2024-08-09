"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Flag from "react-world-flags";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

const initialReviews = [
  {
    id: 1,
    username: "John Doe",
    type: "travel",
    content:
      "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    rating: 5,
    countryCode: "USA",
  },
  {
    id: 2,
    username: "Jane Smith",
    type: "travel",
    content:
      "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    rating: 4,
    countryCode: "CAN",
  },
  {
    id: 3,
    username: "Jane Smith",
    type: "travel",
    content:
      "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    rating: 3,
    countryCode: "ITA",
  },
  {
    id: 4,
    username: "Jane Smith",
    type: "client",
    content:
      "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    rating: 4,
    countryCode: "KR",
  },
  {
    id: 5,
    username: "Jane Smith",
    type: "travel",
    content:
      "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    rating: 4,
    countryCode: "USA",
  },
];

const countries = [
  {
    name: "United States",
    code: "USA",
    bgColor: "#815E7F",
    flagImg: "/image/US.png",
    bgImage: "/image/USA.png",
  },
  {
    name: "Canada",
    code: "CAN",
    bgColor: "#9C6A79",
    flagImg: "/image/Ca.png",
    bgImage: "/image/Canada.png",
  },
  {
    name: "Italy",
    code: "ITA",
    bgColor: "#296200",
    flagImg: "/image/IT.png",
    bgImage: "/image/italy.png",
  },
  {
    name: "Korea",
    code: "KR",
    bgColor: "#0087FF",
    flagImg: "/image/KR.png",
    bgImage: "/image/Korea.png",
  },
  // Add more countries
];

export default function Review() {
  const reviewButton = ["Travel", "Client", "Trave"];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const t = useTranslations("reviews");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const country = countries.find((c) => c.code === selectedCode);
    if (country) {
      setSelectedCountry(country);
    }
  };

  const handleButtonClick = (item: string) => {
    setSelectedButton(item);
  };

  const [reviews, setReviews] = useState(initialReviews);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      username,
      type: selectedButton || "",
      content,
      rating,
      countryCode: selectedCountry.code,
      bgColor: selectedCountry.bgColor,
    };
    setReviews([...reviews, newReview]);
    setUsername("");
    setContent("");
    setRating(0);
    setSelectedButton(null);
  };

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:w-full w-[389px] h-fit bg-gray-200 py-6 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <div className="text-gray-800 lg:text-[22px] text-[16px] font-bold">
          {t("title")}
        </div>
        <div className="lg:text-[12px] text-[10px] text-gray-600 font-normal">
          {t("subtitle")}
        </div>
      </div>

      <div className="lg:w-fit w-[210px] lg:h-[345px] h-fit lg:m-auto ml-[20%] lg:flex lg:items-center lg:gap-8">
        {/* Start review */}
        <div className="flex items-center gap-6">
          <div className="lg:w-[930px] w-full relative">
            <div className="lg:block hidden absolute z-10 right-0 w-[205px] h-[335px] bg-gradient-to-r from-white/0 to-white"></div>
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((review) => {
                const country = countries.find(
                  (c) => c.code === review.countryCode
                );

                return (
                  <div key={review.id} className="">
                    <div
                      className={`review w-fit lg:h-[335px] h-[250px] lg:py-3 py-1 px-1 flex flex-col justify-between`}
                      style={{
                        backgroundImage: `url(${country?.bgImage || ""})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "50%",
                        overflow: "hidden",
                        backgroundSize: "250px 270px",
                        backgroundColor: `${country?.bgColor || ""}`,
                      }}
                    >
                      <div className="w-full flex gap-2 items-center">
                        {country?.flagImg && (
                          <div className="review-image">
                            <Image
                              alt=""
                              src={country.flagImg}
                              width={28}
                              height={28}
                            />
                          </div>
                        )}
                        {country && (
                          <div className="text-white lg:text-[20px] text-[17px] font-bold">
                            {country.name.toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="lg:w-[210px] w-[200px] lg:h-[170px] h-[150px] bg-white/30 border flex flex-col justify-between lg:p-3 p-2">
                        <div className="w-[204px] h-fit flex flex-col gap-3">
                          <div className="flex w-fit h-fit gap-2 items-center">
                            <div className="w-[33px] h-[33px] rounded-full bg-gray-100 flex items-center justify-center">
                              <Image
                                alt=""
                                src="/image/user-01.png"
                                width={19}
                                height={19}
                              />
                            </div>
                            <div className="w-fit h-fit">
                              <div className="text-white lg:text-[14px] text-[12px] font-medium">
                                {review.username}
                              </div>
                              <div className="text-gray-200 lg:text-[13px] text-[10px] font-normal">
                                {review.type}
                              </div>
                            </div>
                          </div>
                          <div
                            className="lg:w-[200px] lg:h-[50px] w-[180px] h-[40px] text-white lg:text-xs text-[10px]"
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {review.content}
                          </div>
                        </div>
                        <Rating
                          name="read-only"
                          value={review.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* Start Add review */}
        <div className="lg:w-[250px] w-[212px] lg:h-[335px] h-[310px] bg-blue-600 lg:px-[10px] px-[8px] lg:py-[16px] py-[12px] flex flex-col gap-3 lg:mt-0 mt-3">
          <div>
            <div className="text-white font-bold lg:text-[17px] text-[14px]">
              Add review
            </div>
            <div className="text-white lg:text-[12px] text-[10px] font-normal">
              Fill your information below
            </div>
          </div>

          <div className="lg:w-[228px] w-[195px] lg:h-[218px] h-[210px] bg-blue-400 flex flex-col p-[11px] gap-[11px] border rounded-xl">
            <div className="lg:w-[209px] w-[175px] h-[40px] flex justify-between items-center">
              <div className="lg:w-[33px] w-[26px] lg:h-[33px] h-[26px] rounded-full bg-gray-100 flex items-center justify-center">
                <Image
                  alt=""
                  src="/image/user-01.png"
                  width={19}
                  height={19}
                  className="lg:w-[19px] w-[16px] lg:h-[19px] h-[16px]"
                />
              </div>
              <div className="lg:w-[168px] w-[140px] h-[40px] flex flex-col justify-between">
                <Input
                  id="username"
                  type="text"
                  placeholder="Who are you?"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full h-[15px] bg-blue-400 text-[#FCFCFD] lg:text-[11px] text-[9px] border-b border-white"
                />
                <div className="w-full h-[15px] flex items-center justify-between">
                  {reviewButton.map((item) => (
                    <div
                      key={item}
                      className={`lg:w-[45px] w-[40px] h-full rounded-[8px] text-center lg:text-[11px] text-[9px] cursor-pointer ${
                        selectedButton === item
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-600"
                      }`}
                      onClick={() => handleButtonClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[209px] w-[175px] h-[24px] flex items-center lg:justify-between gap-4">
              <div className="lg:text-[12px] text-[9px] text-white font-bold">
                Where are you from?
              </div>
              <div className="lg:w-[80px] w-[60px] h-[24px] bg-white rounded-[6px] flex items-center">
                <Flag
                  className="w-[24px] h-[24px]"
                  code={selectedCountry.code}
                />
                <select
                  className="w-[50px] h-[24px] text-[12px] font-bold text-blue-500"
                  value={selectedCountry.code}
                  onChange={handleChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Textarea
              id="content"
              className="lg:w-[209px] w-[175px] lg:h-[75px] h-[45px] bg-blue-400 border border-white lg:rounded-xl rounded-[8px] text-[#FCFCFD] lg:text-[12px] text-[10px]"
              placeholder="Tell us what you think about us?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleRatingChange}
              size="medium"
            />
          </div>

          <button
            onClick={handleAddReview}
            className="lg:w-[228px] w-[195px] lg:h-[43px] h-[30px] rounded-[6px] bg-white text-center text-gray-800 font-semibold lg:text-[17px] text-[13px]"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
