import React from "react";
import Weather from "./components/Weather";


function App() {
  return (

      <div>
        <div className="welcome">
        <h1>Weather App</h1>
        <p>Select a city or search to get the weather information: </p>
        </div>
        <Weather />
        
      </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import Search from './components/Search';
// import Forecast from './components/Forecast';
// import Current from './components/CurrentWeather';
// import './App.css';

// const App = () => {
//   const [selectedCity, setSelectedCity] = useState(null);

//   const handleSearchChange = (searchData) => {
//     selectedCity(searchData);
//   };

//   return (
//     <div>
//       <h1>WeatherApp</h1>
//       <Search onSearchChange={handleSearchChange} />
//       <Forecast selectedCity={selectedCity} />
//       <Current selectedCity={selectedCity} />

//       <p className="subtitle">Get real time weather information for your city.</p>

      
//     </div>
//   );
// };

// export default App;
