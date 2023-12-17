import React from 'react';
import Search from './components/Search';
import Forecast from './components/Forecast';
import Current from './components/Current';
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to WeatherApp</h1>
      <p className="subtitle">Get real time weather information for your city.</p>
      <Search />
      <Current />
      <Forecast />
    </div>
  );
}

export default App;
