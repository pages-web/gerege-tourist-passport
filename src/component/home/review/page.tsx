"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Flag from "react-world-flags";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";

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
    name: "Germany",
    code: "DEU",
    bgColor: "#815E7F",
    flagImg: "",
    bgImage: "",
  },
  { name: "France", code: "FRA", bgColor: "#815E7F", flagImg: "", bgImage: "" },
  { name: "Japan", code: "JPN", bgColor: "#815E7F", flagImg: "", bgImage: "" },
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
  };

  return (
    <div className="w-full h-fit bg-gray-200 mb-[60px] pt-6 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <div className="text-gray-800 text-[22px] font-bold">
          We’ve helped hundreds of global companies
        </div>
        <div className="text-[12px] text-gray-600 font-normal">
          Case studies from some of our amazing customers who are building
          faster.
        </div>
      </div>

      <div className="w-fit h-[352px] m-auto flex items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="w-[1030px] relative">
            <div className="absolute z-10 right-0 w-[200px] h-[352px] bg-gradient-to-r from-white/0 to-white"></div>
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((review) => {
                const country = countries.find(
                  (c) => c.code === review.countryCode
                );

                return (
                  <div key={review.id} className="">
                    <div
                      className={`review w-fit h-[350px] py-3 px-1 flex flex-col justify-between `}
                      style={{
                        backgroundImage: `url(${country?.bgImage || ""})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "50%",
                        overflow: "hidden",
                        backgroundSize: "270px 270px",
                        backgroundColor: `${country?.bgColor || ""}`,
                      }}
                    >
                      <div className="w-full flex gap-[10px] items-center">
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
                          <div className="text-white text-[24px] font-bold">
                            {country.name.toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="w-[238px] h-[176px] bg-black/30 border flex flex-col justify-between p-4">
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
                              <div className="text-white text-[14px] font-medium">
                                {review.username}
                              </div>
                              <div className="text-gray-200 text-[13px] font-normal">
                                {review.type}
                              </div>
                            </div>
                          </div>
                          <p className="w-full h-[45px] text-white text-xs">
                            {review.content}
                          </p>
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

        <div className="w-[265px] h-[345px] bg-blue-600 px-[12px] py-[16px] flex flex-col gap-3">
          <div>
            <div className="text-white font-bold text-[18px]">Add review</div>
            <div className="text-white text-[12px] font-normal">
              Fill your information below
            </div>
          </div>

          <div className="w-[232px] h-[218px] bg-blue-400 flex flex-col p-[11px] gap-[11px] border rounded-xl">
            <div className="w-[209px] h-[40px] flex justify-between items-center">
              <div className="w-[33px] h-[33px] rounded-full bg-gray-100 flex items-center justify-center">
                <Image alt="" src="/image/user-01.png" width={19} height={19} />
              </div>
              <div className="w-[168px] h-[40px] flex flex-col justify-between">
                <Input
                  id="username"
                  type="text"
                  placeholder="Who are you?"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full h-[15px] bg-blue-400 text-[#FCFCFD] text-[11px] border-b border-white"
                />
                <div className="w-full h-[15px] flex items-center justify-between">
                  {reviewButton.map((item) => (
                    <div
                      key={item}
                      className={`w-[45px] h-full rounded-[8px] text-center text-[11px] cursor-pointer ${
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

            <div className="w-[209px] h-[24px] flex items-center justify-between">
              <div className="text-[12px] text-white font-bold">
                Where are you from?
              </div>
              <div className="w-[80px] h-[24px] bg-white rounded-[6px] flex items-center">
                <Flag
                  className="w-[24px] h-[24px] rounded-full"
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
              className="w-[209px] h-[75px] bg-blue-400 border border-white rounded-xl text-[#FCFCFD] text-[12px]"
              placeholder="Tell us what you think about us?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>

          <button
            onClick={handleAddReview}
            className="w-[232px] h-[43px] rounded-[6px] bg-white text-center text-gray-800 font-semibold text-[17px]"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
