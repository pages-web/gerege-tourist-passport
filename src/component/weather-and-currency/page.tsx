"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Define the types for weather and currency data
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

const WeatherAndCurrency: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [currency, setCurrency] = useState<CurrencyData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
        );
        setWeather(weatherResponse.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
        setError("Error fetching weather data");
      }
    };

    const fetchCurrencyData = async () => {
      try {
        const currencyResponse = await axios.get<CurrencyData>(
          `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/latest/USD`
        );
        setCurrency(currencyResponse.data);
      } catch (error) {
        console.error("Error fetching currency data: ", error);
        setError("Error fetching currency data");
      }
    };

    fetchWeatherData();
    fetchCurrencyData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weather || !currency) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weather.main.temp);
  const currencyRate = currency.conversion_rates.MNT; // Example: USD to MNT

  return (
    <div className="w-[57px] h-fit flex flex-col gap-2 absolute z-10 right-0 bottom-0">
      <div className="w-[57px] h-[57px] border rounded-[16px] border-white bg-black flex flex-col items-center justify-center">
        <Image
          alt="Weather icon"
          src="/image/PartlyCloudy.png"
          width={33}
          height={25}
        />
        <div className="text-white text-base font-bold">+{temperature}°C</div>
      </div>
      <div className="w-[57px] h-[57px] border rounded-[16px] border-[#EAECF0] bg-[#D1FADF] flex flex-col items-center justify-center">
        <div className="flex items-center gap-1">
          <Image
            alt="Dollar icon"
            src="/image/dollar.png"
            width={13}
            height={21}
          />
          <Image
            alt="Trend icon"
            src="/image/trend-up-01.png"
            width={26}
            height={26}
          />
        </div>
        <div className="text-gray-800 text-[12px]">
          USD to MNT: {currencyRate}
        </div>
      </div>
    </div>
  );
};

export default WeatherAndCurrency;
