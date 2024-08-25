import React, { useEffect, useState } from "react";
import Image from "next/image";

interface WeatherSlide {
  weatherNow?: string;
  location?: string;
  dailyForecast?: { day: string; temp: string }[];
  hourlyForecast?: { time: string; temp: string }[];
}

const WeatherCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<WeatherSlide[]>([]);

  useEffect(() => {
    const fetchWeatherData = async (city: string) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
        );
        const data = await response.json();
        return {
          weatherNow: `${Math.round(data.main.temp)}°C`,
          location: data.name,
          imgURL: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        };
      } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
      }
    };

    const fetchAllWeatherData = async () => {
      const cities = ["Ulaanbaatar", "Tokyo", "New York"];
      const weatherData = await Promise.all(
        cities.map((city) => fetchWeatherData(city))
      );

      const validWeatherData = weatherData.filter(Boolean) as {
        weatherNow: string;
        location: string;
        imgURL: string;
      }[];

      const newSlides: WeatherSlide[] = validWeatherData.map((data) => ({
        weatherNow: data.weatherNow,
        location: data.location,
        dailyForecast: [
          { day: "Monday", temp: data.weatherNow },
          { day: "Tuesday", temp: data.weatherNow },
          { day: "Wednesday", temp: data.weatherNow },
          { day: "Thursday", temp: data.weatherNow },
          { day: "Friday", temp: data.weatherNow },
          { day: "Saturday", temp: data.weatherNow },
          { day: "Sunday", temp: data.weatherNow },
        ],
        hourlyForecast: [
          { time: "12:00", temp: data.weatherNow },
          { time: "13:00", temp: data.weatherNow },
          { time: "14:00", temp: data.weatherNow },
          { time: "15:00", temp: data.weatherNow },
          { time: "16:00", temp: data.weatherNow },
          { time: "17:00", temp: data.weatherNow },
          { time: "18:00", temp: data.weatherNow },
        ],
      }));

      setSlides(newSlides);
    };

    fetchAllWeatherData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`relative w-[340px] h-[160px] bg-gray-50 rounded-xl px-3 py-2 `}
    >
      <div
        className={`flex transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="flex">
              {slide.weatherNow && (
                <div>
                  <p>{slide.location}</p>
                  <p>{slide.weatherNow}</p>
                </div>
              )}
            </div>

            <div>
              {slide.dailyForecast && (
                <div>
                  {slide.dailyForecast.map((forecast, i) => (
                    <p key={i}>{`${forecast.day}: ${forecast.temp}`}</p>
                  ))}
                </div>
              )}
            </div>
            <div>
              {slide.hourlyForecast && (
                <div>
                  {slide.hourlyForecast.map((forecast, i) => (
                    <p key={i}>{`${forecast.time}: ${forecast.temp}`}</p>
                  ))}
                </div>
              )}
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

export default WeatherCarousel;

// import React, { useEffect, useState } from "react";

// interface WeatherSlide {
//   weatherNow?: string;
//   location?: string;
//   dailyForecast?: { day: string; temp: string }[];
//   hourlyForecast?: { time: string; temp: string }[];
// }

// const WeatherCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slides, setSlides] = useState<WeatherSlide[]>([]);

//   useEffect(() => {
//     // Mock weather data
//     const mockWeatherData = [
//       {
//         weatherNow: "15°C",
//         location: "Ulaanbaatar",
//       },
//       {
//         dailyForecast: [
//           { day: "Monday", temp: "25°C" },
//           { day: "Tuesday", temp: "26°C" },
//           { day: "Wednesday", temp: "27°C" },
//           { day: "Thursday", temp: "24°C" },
//           { day: "Friday", temp: "23°C" },
//           { day: "Saturday", temp: "22°C" },
//           { day: "Sunday", temp: "21°C" },
//         ],
//       },
//       {
//         hourlyForecast: [
//           { time: "12:00", temp: "20°C" },
//           { time: "13:00", temp: "21°C" },
//           { time: "14:00", temp: "22°C" },
//           { time: "15:00", temp: "19°C" },
//           { time: "16:00", temp: "18°C" },
//           { time: "17:00", temp: "17°C" },
//           { time: "18:00", temp: "16°C" },
//         ],
//       },
//     ];

//     setSlides(mockWeatherData);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-[340px] h-[160px] bg-gray-50 rounded-xl overflow-hidden">
//       <div
//         className={`flex transition-transform duration-1000 ease-in-out`}
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${slides.length * 100}%`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="w-full flex-shrink-0 flex flex-col items-center justify-center"
//           >
//             <div className="w-full h-full bg-gray-600">
//               {slide.weatherNow && (
//                 <div className="">
//                   <p>{slide.location}</p>
//                   <p>{slide.weatherNow}</p>
//                 </div>
//               )}
//             </div>
//             <div className="w-full h-full bg-gray-600">
//               {slide.dailyForecast && (
//                 <div>
//                   {slide.dailyForecast.map((forecast, i) => (
//                     <p key={i}>{`${forecast.day}: ${forecast.temp}`}</p>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="w-full h-full flex bg-gray-600">
//               {slide.hourlyForecast && (
//                 <div>
//                   {slide.hourlyForecast.map((forecast, i) => (
//                     <p key={i}>{`${forecast.time}: ${forecast.temp}`}</p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//     {slides.map((_, index) => (
//       <button
//         key={index}
//         className={`w-3 h-3 rounded-full ${
//           index === currentIndex ? "bg-blue-700" : "bg-gray-400"
//         }`}
//         onClick={() => goToSlide(index)}
//       ></button>
//     ))}
//   </div>
// </div>
//   );
// };

// export default WeatherCarousel;
