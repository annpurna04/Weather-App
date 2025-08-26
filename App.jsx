import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import fetchWeather from './utils/fetchWeather';


const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    const { data, err } = await fetchWeather(city);
    if (err) {
      setError(err);
      setWeather(null);
    } else {
      setWeather(data);
      setError('');
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Form city={city} setCity={setCity} handleSubmit={handleSubmit} />
      <ErrorMessage error={error} />
      <WeatherInfo weather={weather} />
      </div>
   
  );
};

export default App;
