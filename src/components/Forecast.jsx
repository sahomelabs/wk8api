
import React from 'react';
import {
 Accordion,
 AccordionItem,
 AccordionItemHeading,
 AccordionItemButton,
 AccordionItemPanel,
} from 'react-accessible-accordion';


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {
 const today = new Date();
 const dayInAWeek = today.getDay();
 const forecastDays = [...WEEK_DAYS.slice(dayInAWeek), ...WEEK_DAYS.slice(0, dayInAWeek)];


 return (
   <>
   <div className="forecast">
     <label className="title">Forecast</label>
     <Accordion allowZeroExpanded>
       {data.list.slice(0, 7).map((item, idx) => (
         <AccordionItem key={idx}>
           <AccordionItemHeading>
             <AccordionItemButton>
               <div className="daily-item">
                 <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                 <label className="day">{forecastDays[idx]}</label>
                 <label className="description">{item.weather[0].description}</label>
                 <label className="min-max">{Math.round(item.main.temp_max)}°F / {Math.round(item.main.temp_min)}°F</label>
               </div>
             </AccordionItemButton>
           </AccordionItemHeading>
           <AccordionItemPanel>
             <div className="daily-details-grid">
               {/* Display additional details */}
               {[
                 { label: 'Humidity', value: item.main.humidity },
                 { label: 'Clouds', value: `${item.clouds.all}%` },
                 { label: 'Wind speed', value: `${item.wind.speed} mph` },
                 { label: 'Sea level', value: `${item.main.sea_level}m` },
                 { label: 'Feels like', value: `${item.main.feels_like}°F` },
               ].map((detail, index) => (
                 <div key={index} className="daily-details-grid-item">
                   <label>{detail.label}:</label>
                   <label>{detail.value}</label>
                 </div>
               ))}
             </div>
           </AccordionItemPanel>
         </AccordionItem>
       ))}
     </Accordion>
     </div>
   </>
 );
};


export default Forecast;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { geoApiOptions, GEO_API_URL, openWeatherMapApiOptions, OPENWEATHERMAP_API_URL } from '../Api';


// const Forecast = ({ selectedCity }) => {
//   const [forecastData, setForecastData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchForecastData = async () => {
//       if (!selectedCity) return;

//       setLoading(true);

//       // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
//       const apiKey = 'ac2af5a3316858a9a7628097b3eadae3';

//       try {
//         const response = await axios.get(
//           `${OPENWEATHERMAP_API_URL}/forecast?lat=${selectedCity.value.split(' ')[0]}&lon=${selectedCity.value.split(' ')[1]}&appid=${apiKey}`
//         );

//         setForecastData(response.data);
//       } catch (error) {
//         console.error('Error fetching forecast data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchForecastData();
//   }, [selectedCity]);

//   return (
//     <div>
//       {loading && <p>Loading forecast data...</p>}
//       {forecastData && (
//         <div>
//           <h2>5-Day Forecast for {selectedCity.label}</h2>
//           {forecastData.list.map((item) => (
//             <div key={item.dt}>
//               <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
//               <p>Temperature: {item.main.temp} °F</p>
//               <p>Weather: {item.weather[0].description}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Forecast;
