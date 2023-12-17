// // Weather.jsx

import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Search from "./Search";
import "./Weather.css"
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api/WeatherApi";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    try {
      const [lat, lon] = searchData.value.split(" ");

      const currentWeatherResponse = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
      );
      const forecastResponse = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
      );

      if (!currentWeatherResponse.ok || !forecastResponse.ok) {
        throw new Error("Could not fetch weather data");
      }

      const currentWeatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();

      setCurrentWeather({ city: searchData.label, ...currentWeatherData });
      setForecast({ city: searchData.label, ...forecastData });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default Weather;




// import React, {useState} from "react";
// import CurrentWeather from "./CurrentWeather";
// import Forecast from "./Forecast";
// import Search from "./Search";
// import { WEATHER_API_URL, WEATHER_API_KEY } from "../api/WeatherApi";


// const Weather = () => {
//   const {currentWeather,  setCurrentWeather} = useState(null);
//   const [forecast, setForecast] = useState(null);

//   const handleOnSearchChange = async (searchData) => {
//     try {
//       const [lat, lon] = searchData.value.split(" ");

//       const currentWeatherResponse = await fetch(
//         `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
//       );
//       const forecastResponse = await fetch(
//         `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
//       );

//       if (!currentWeatherResponse.ok || !forecastResponse.ok) {
//         throw new Error("Could not fetch weather data");
//       }

//       const currentWeatherData = await currentWeatherResponse.json();
//       const forecastData = await forecastResponse.json();

//       updateCurrentWeather ({ city: searchData.label, ...currentWeatherData });
//       updateForecast ({ city: searchData.label, ...forecastData });

//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {currentWeather && <CurrentWeather data={currentWeather} />}
//       {forecast && <Forecast data={forecast} />}
//     </div>
//   );
// };

// export default Weather;