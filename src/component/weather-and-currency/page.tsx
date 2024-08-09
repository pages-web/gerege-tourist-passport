"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface WeatherData {
  main: {
    temp: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

interface CurrencyData {
  conversion_rates: {
    MNT: number;
  };
}

const weatherSlides = [
  {
    temtrature: "",
    cityName: "",
    imgURL: "",
  },
  {},
  {},
];

const WeatherAndCurrency: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [currency, setCurrency] = useState<CurrencyData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const weatherResponse = await axios.get<WeatherData>(
  //         `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
  //       );
  //       setWeather(weatherResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching weather data: ", error);
  //       setError("Error fetching weather data");
  //     }
  //   };

  //   const fetchCurrencyData = async () => {
  //     try {
  //       const currencyResponse = await axios.get<CurrencyData>(
  //         `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/latest/USD`
  //       );
  //       setCurrency(currencyResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching currency data: ", error);
  //       setError("Error fetching currency data");
  //     }
  //   };

  //   fetchWeatherData();
  //   fetchCurrencyData();
  // }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!weather || !currency) {
  //   return <div>Loading...</div>;
  // }

  // const temperature = Math.round(weather.main.temp);
  // const currencyRate = currency.conversion_rates.MNT;

  return (
    <div className="lg:w-[57px] w-fit h-fit flex flex-col gap-2 fixed z-50 -right-px lg:top-[520px] top-[335px]">
      <div className="lg:w-[57px] w-10 lg:h-[57px] h-10 border lg:rounded-2xl rounded-xl border-white bg-black flex flex-col items-center justify-center">
        <Image
          alt="Weather icon"
          src="/image/PartlyCloudy.png"
          width={33}
          height={25}
          className="lg:w-[33px] w-5 lg:h-[25px] h-5"
        />
        <div className="text-white lg:text-base text-[11px] font-bold">
          +{/* {temperature} */}
          23°C
        </div>
      </div>
      <div className="lg:w-[57px] w-10 lg:h-[57px] h-10 border lg:rounded-2xl rounded-xl border-[#EAECF0] bg-[#D1FADF] flex flex-col items-center justify-center relative">
        <div className="w-full h-fit flex flex-col">
          <Image
            alt="Dollar icon"
            src="/image/dollar.png"
            width={14}
            height={20}
            className="absolute top-1 left-2 lg:w-[14px] w-2 lg:h-[20px] h-3"
          />

          <Image
            alt="Trend icon"
            src="/image/trend-up-01.png"
            width={28}
            height={32}
            className="absolute top-3 right-2 lg:w-[28px] w-4 lg:h-8 h-4"
          />
        </div>
        <div className="text-gray-800 lg:text-[13px] text-[9px] absolute bottom-0">
          +0.33%
          {/* {currencyRate} */}
        </div>
      </div>
    </div>
  );
};

export default WeatherAndCurrency;
