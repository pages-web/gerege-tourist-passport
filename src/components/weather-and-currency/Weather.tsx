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
const key = "YOUR_API_KEY_HERE"; // Move API key to environment variable for security

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
        now.setUTCHours(now.getUTCHours() + 8); // Adjust for timezone
        const today = now.toISOString().slice(0, 10);
        const currentHour = now.getUTCHours();

        const sunriseUTC = new Date(
          response.data.city.sunrise * 1000
        ).getUTCHours();
        const sunsetUTC = new Date(
          response.data.city.sunset * 1000
        ).getUTCHours();

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
          transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
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
                  <p className="md:text-4xl text-xl font-bold text-gray-800">
                    {slide.weatherNow.weatherNow}
                  </p>
                  <p className="md:text-[14px] text-[12px] font-medium text-gray-600">
                    {slide.weatherNow.location}
                  </p>
                </div>
                <div
                  className="md:w-[75px] w-12 md:h-[75px] h-12 bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.weatherNow.weatherIcon})`,
                  }}
                />
              </div>
            )}
            {slide.dailyForecast && (
              <div className="flex flex-col w-full h-full overflow-auto">
                {slide.dailyForecast.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border-b border-gray-300"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">
                        {day.day}
                      </span>
                      <span className="text-gray-500">{day.date}</span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={day.weatherIcon}
                        alt={day.weatherIcon}
                        className="w-10 h-10 bg-contain"
                      />
                      <span className="ml-2 font-bold text-gray-800">
                        {day.temp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {slide.hourlyForecast && (
              <div className="flex flex-col w-full h-full overflow-auto">
                {slide.hourlyForecast.map((hour, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border-b border-gray-300"
                  >
                    <span className="text-gray-700">{hour.time}</span>
                    <div className="flex items-center">
                      <img
                        src={hour.weatherIcon}
                        alt={hour.weatherIcon}
                        className="w-8 h-8 bg-contain"
                      />
                      <span className="ml-2 font-bold text-gray-800">
                        {hour.temp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
