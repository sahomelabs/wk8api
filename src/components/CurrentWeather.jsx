import React from 'react'


const CurrentWeather = ({data}) => {
 return (
   <div className="weather">
       <h1>Current Weather</h1>
       <div className="top">
           <div>
               <p className="city">{data.city}</p>
               <p className="weather-description">{data.weather[0].description}</p>
           </div>
           <img
           alt="weather"
           className="weather-icon"
           src={`icons/${data.weather[0].icon}.png`} />
       </div>
       <div className="bottom">
           <p className="temperature">{Math.round(data.main.temp)}°F</p>
           <div className="details">
               <div className="parameter-row">
                   <span className="parameter-label">Details</span>
               </div>
               <div className="parameter-row">
                   <span className="parameter-label">Feels like</span>
                   <span className="parameter-value"></span>
                   <span>{Math.round(data.main.feels_like)}°F</span>
               </div>
                   <div className="parameter-row">
                       <span className="parameter-label">Wind</span>
                       <span className="parameter-value">{data.wind.speed} mph</span>
                   </div>
               <div className="parameter-row">
                   <span className="parameter-label">Humidity</span>
                   <span className="parameter-value">{data.main.humidity}%</span>
               </div>
           </div>
       </div>
      
   </div>
 )
}


export default CurrentWeather;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { geoApiOptions, GEO_API_URL, openWeatherMapApiOptions, OPENWEATHERMAP_API_URL } from '../Api';


// const CurrentWeather = ({ selectedCity }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       if (!selectedCity) return;

//       setLoading(true);

//       // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
//       const apiKey = 'ac2af5a3316858a9a7628097b3eadae3';

//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.value.split(' ')[0]}&lon=${selectedCity.value.split(' ')[1]}&appid=${apiKey}`
//         );

//         setWeatherData(response.data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeatherData();
//   }, [selectedCity]);

//   return (
//     <div>
//       {loading && <p>Loading weather data...</p>}
//       {weatherData && (
//         <div>
//           <h2>{selectedCity.label}</h2>
//           <p>Temperature: {weatherData.main.temp} °F</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//           {/* Add more weather details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CurrentWeather;
