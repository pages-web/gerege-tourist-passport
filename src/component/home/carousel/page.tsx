"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      backgroundImage: "/image/home-bg.png",
      title: "SAVE UP 49% WITH THE GEREGE PASS",
      description:
        "Explore all the best London attractions and activities, all for one low price.",
    },
    {
      backgroundImage: "/image/about-1.png",
      title: "Discover London",
      description: "Experience the charm of London's iconic landmarks.",
    },
    {
      backgroundImage: "/image/about-1.png",
      title: "Exclusive Offers",
      description: "Get special deals on top attractions.",
    },
    {
      backgroundImage: "/image/about-1.png",
      title: "Plan Your Trip",
      description: "Organize your adventures in London.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 25}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center pt-[300px]"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundPositionY: "55%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "620px",
            }}
          >
            <div className="w-[1200px] h-[278px] rounded-[16px] p-[24px] flex flex-col justify-between bg-black/[.7]">
              <div className="w-[780px] text-[48px] text-white font-bold">
                {slide.title}
              </div>
              <div className="text-base font-normal text-white">
                {slide.description}
              </div>
              <button className="w-[127px] h-[43px] rounded-[8px] bg-[#0087FF] text-white text-[16px] font-semibold flex items-center justify-center">
                Buying now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
