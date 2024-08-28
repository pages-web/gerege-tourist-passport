"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WeatherContextType {
  weatherNow: {
    weatherNow: string;
    weatherIcon: string;
  } | null;
  setWeatherNow: React.Dispatch<
    React.SetStateAction<{
      weatherNow: string;
      weatherIcon: string;
    } | null>
  >;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherNow, setWeatherNow] = useState<{
    weatherNow: string;
    weatherIcon: string;
  } | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherNow, setWeatherNow }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
