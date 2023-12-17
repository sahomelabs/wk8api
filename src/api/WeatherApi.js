// src/api/WeatherApi.js

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3f07c540f6msh149a8e5daabd311p15a05bjsnbf754dd6fc30",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const WEATHER_API_KEY = "ac2af5a3316858a9a7628097b3eadae3";

// Define WEATHER_API_UNITS with an appropriate value ('imperial', 'metric', etc.)
export const WEATHER_API_UNITS = 'imperial'; // You can adjust this based on your preference

export const getWeatherApiUrl = (city) => {
  return `${WEATHER_API_URL}/weather?q=${city}&units=${WEATHER_API_UNITS}&appid=${WEATHER_API_KEY}`;
};

export const fetchGeoData = async () => {
  const geoDataUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?minPopulation=200000';

  try {
    const geoResponse = await fetch(geoDataUrl, geoApiOptions);
    const geoResult = await geoResponse.json();
    const city = geoResult.data[0].city;

    if (city) {
      const weatherApiUrl = getWeatherApiUrl(city);
      const weatherResponse = await fetch(weatherApiUrl);
      const weatherResult = await weatherResponse.json();

      console.log(weatherResult);
    } else {
      console.error("City not found");
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};




// export const geoApiOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "3f07c540f6msh149a8e5daabd311p15a05bjsnbf754dd6fc30",
//       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//     },
//   };
  
//   export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
//   export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
//   export const WEATHER_API_KEY = "ac2af5a3316858a9a7628097b3eadae3";
  
//   export const getWeatherApiUrl = (city) => {
//     return `${WEATHER_API_URL}/weather?q=${city}&units=${WEATHER_API_UNITS}&appid=${WEATHER_API_KEY}`;
//   };
  
//   export const fetchGeoData = async () => {
//     const geoDataUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?minPopulation=200000';
  
//     try {
//       const geoResponse = await fetch(geoDataUrl, geoApiOptions);
//       const geoResult = await geoResponse.json();
//       const city = geoResult.data[0].city; 

//     if (city) {  
//       const weatherApiUrl = getWeatherApiUrl(city);
//       const weatherResponse = await fetch(weatherApiUrl);
//       const weatherResult = await weatherResponse.json();
      
//       console.log(weatherResult);
//     } else {
//       console.error("City not found");
//     }
//     } catch (error) {
//       console.error("Error fetching weather;", error);
//     }
// };
  
