import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWeather } from "@/provider/WeatherProvider";

interface WeatherSlide {
  weatherNow?: {
    weatherNow: string;
    location: string;
    weatherIcon?: string;
  };
  dailyForecast?: {
    day: string;
    temp: string;
    date: string;
    weatherIcon: string;
  }[];
  hourlyForecast?: { time: string; temp: string; weatherIcon: string }[];
}

// Map API icon codes to local icon filenames
const iconMapping: { [key: string]: string } = {
  "01d": "/weather-icons/Sunny.png",
  "01n": "/weather-icons/Moon.png",
  "02d": "/weather-icons/partly-cloudy.png",
  "02n": "/weather-icons/partly-cloudy.png",
  "03d": "/weather-icons/cloudy.png",
  "03n": "/weather-icons/cloudy.png",
  "04d": "/weather-icons/cloudy.png",
  "04n": "/weather-icons/cloudy.png",
  "09d": "/weather-icons/rainny-and-flash.png",
  "09n": "/weather-icons/rainny-and-flash.png",
  "10d": "/weather-icons/Rainy.png",
  "10n": "/weather-icons/Rainy.png",
  "11d": "/weather-icons/rainny-and-flash.png",
  "11n": "/weather-icons/rainny-and-flash.png",
  "13d": "/weather-icons/Snowy.png",
  "13n": "/weather-icons/Snowy.png",
};
const key = "ffc74c9e41d3cd99bf6bb25a7f582a7a";

const Weather: React.FC = () => {
  const { setWeatherNow } = useWeather();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<WeatherSlide[]>([]);
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?id=2028462&units=metric&appid=${key}`
        );

        const now = new Date();
        now.setUTCHours(now.getUTCHours() + 8);
        const today = now.toISOString().slice(0, 10);
        const currentHour = now.getUTCHours();

        // Get the sunrise and sunset times from the API response
        const sunriseUTC = new Date(
          response.data.city.sunrise * 1000
        ).getUTCHours();
        const sunsetUTC = new Date(
          response.data.city.sunset * 1000
        ).getUTCHours();

        // Convert to local time (UTC+8)
        const sunriseLocal = (sunriseUTC + 8) % 24;
        const sunsetLocal = (sunsetUTC + 8) % 24;

        setIsDayTime(currentHour >= sunriseLocal && currentHour < sunsetLocal);

        const weatherByDay = response.data.list.reduce(
          (location: any, weather: any) => {
            const date = weather.dt_txt.slice(0, 10);
            const temperature = weather.main.temp;
            const icon = weather.weather[0].icon;

            if (date >= today) {
              if (!location[date]) {
                location[date] = {
                  hottestTemperature: -Infinity,
                  icon: icon,
                };
              }
              location[date].hottestTemperature = Math.max(
                location[date].hottestTemperature,
                temperature
              );
              location[date].icon = icon;
            }
            return location;
          },
          {}
        );

        const data = Object.keys(weatherByDay).map((date) => {
          const { hottestTemperature, icon } = weatherByDay[date];
          return {
            date,
            hottestTemperature,
            icon: iconMapping[icon] || "/weather-icons/default.png",
          };
        });

        const hourlyData = response.data.list
          .map((weather: any) => {
            const weatherDate = new Date(weather.dt_txt);
            const weatherHourUTC = weatherDate.getUTCHours();

            const weatherHourLocal = (weatherHourUTC + 8) % 24;

            const isDaytime = weatherHourLocal >= 6 && weatherHourLocal <= 21;

            return {
              time: weatherDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Ulaanbaatar",
              }),
              temp: `${weather.main.temp.toFixed(0)}°C`,
              weatherIcon:
                iconMapping[weather.weather[0].icon] ||
                "/weather-icons/default.png",
              isDaytime,
            };
          })
          .filter((weather: any) => weather.isDaytime);

        const weatherNowSlide = {
          weatherNow: {
            weatherNow: `${data[0].hottestTemperature.toFixed(0)}°C`,
            location: "Ulaanbaatar",
            weatherIcon:
              iconMapping[data[0].icon] || "/weather-icons/default.png",
          },
        };

        setWeatherNow(weatherNowSlide.weatherNow);

        const dailyForecastSlide = {
          dailyForecast: data.map((dayData, index) => {
            const dateParts = dayData.date.split("-");
            const dateObj = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );

            const options: Intl.DateTimeFormatOptions = {
              month: "short",
              day: "2-digit",
            };

            const formattedDate = dateObj.toLocaleDateString("en-US", options);

            return {
              day: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ][index % 7],
              date: formattedDate,
              temp: `${dayData.hottestTemperature.toFixed(0)}°C`,
              weatherIcon: dayData.icon,
            };
          }),
        };

        const hourlyForecastSlide = {
          hourlyForecast: hourlyData,
        };

        setSlides([weatherNowSlide, dailyForecastSlide, hourlyForecastSlide]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [setWeatherNow]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative md:w-[360px] w-[255px] md:h-[170px] h-[140px] rounded-xl overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 33.34}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`md:w-[360px] w-[255px] md:h-[170px] h-[140px] flex-shrink-0 flex items-center justify-center ${
              index === 0
                ? isDayTime
                  ? "bg-gradient-to-r from-white to-[#FFF3B1]"
                  : "bg-gradient-to-r from-white to-[#001f3f]"
                : "bg-[#EAECF0]"
            }`}
          >
            {slide.weatherNow && (
              <div className="flex items-center justify-between w-full h-full text-center p-4">
                <div className="flex flex-col md:gap-3">
                  <p className="md:text-4xl text-2xl font-bold text-gray-800">
                    {slide.weatherNow.weatherNow}
                  </p>
                  <p className="md:text-[14px] text-[12px] font-medium text-gray-600">
                    {slide.weatherNow.location}
                  </p>
                </div>
                <div
                  className="md:w-[75px] w-12 md:h-[75px] h-12 bg-contain bg-center bg-no-repeat overflow-hidden"
                  style={{
                    backgroundImage: `url(${
                      slide.weatherNow.weatherIcon ||
                      "/weather-icons/default.png"
                    })`,
                  }}
                ></div>
              </div>
            )}

            {slide.dailyForecast && (
              <div className="flex items-center justify-between bg-[#EAECF0] w-full h-full text-center md:p-4 p-2">
                {slide.dailyForecast.slice(0, 5).map((forecast, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center md:gap-3 gap-1"
                  >
                    <p className="md:text-[14px] text-[12px] font-bold">
                      {forecast.temp}
                    </p>
                    <div
                      className="md:w-[25px] w-5 md:h-[25px] h-5 bg-contain bg-center bg-no-repeat overflow-hidden"
                      style={{
                        backgroundImage: `url(${
                          iconMapping[forecast.weatherIcon] ||
                          "/weather-icons/default.png"
                        })`,
                      }}
                    ></div>
                    <p className="text-[11px] md:font-bold font-medium">
                      {forecast.date}
                    </p>
                    <p className="text-[11px] md:font-bold font-medium">
                      {forecast.day}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {slide.hourlyForecast && (
              <div className="flex items-center justify-between bg-[#EAECF0] w-full h-full text-center md:p-4 p-2">
                {slide.hourlyForecast.slice(0, 6).map((forecast, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center md:gap-3 gap-1"
                  >
                    <p className="md:text-[14px] text-[12px] font-bold">
                      {forecast.temp}
                    </p>

                    <div
                      className="w-[25px] h-[25px] bg-contain bg-center bg-no-repeat overflow-hidden"
                      style={{
                        backgroundImage: `url(${forecast.weatherIcon})`,
                      }}
                    ></div>

                    <p className="md:text-[12px] text-[11px] font-bold">
                      {forecast.time}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Weather;
