//Gestisco gli Stati utilizzando i React e i Redux Hooks.
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setWeatherIcon } from './redux/actions';

// Importo gli assets, in questo caso le immagini, necessarie.
import clear_icon from "../src/assets/clear.png";
import cloud_icon from "../src/assets/cloud.png";
import drizzle_icon from "../src/assets/drizzle.png";
import humidity_icon from "../src/assets/humidity.png";
import rain_icon from "../src/assets/rain.png";
import snow_icon from "../src/assets/snow.png";
import wind_icon from "../src/assets/wind.png";
import './App.css'

function App() {

  //Questa è la mia Key da utilizzare per l'API.
  let api_key = "8faf54eae4c403d686a4428a4bab05ad";

//Utilizzo l'hook di Redux per ottenere la funzione dispatch e per estrarre quello che mi serve dallo store di Redux.
  const dispatch = useDispatch();
  const { weatherData, weatherIcon } = useSelector((state) => state);

  const [city, setCity] = useState('');

  /*Questa funzione viene chiamata per eseguire una ricerca dei dati di cui abbiamo bisogno, in questo caso: 
ho voluto mostrare i °C, la percentuale di umidità, la velocità del vento e anche l'icona che cambia in base al tempo*/
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&APPID=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    
    //Vengono estratti alcuni dati rilevanti dalla risposta dell'API di OpenWeatherMap e successivamente viene inviata un'azione Redux (setWeatherData) per aggiornare lo stato globale con questi dati.
    const newWeatherData = {
      humidity: data.main.humidity + ' %',
      wind: data.wind.speed + ' km/h',
      temperature: Math.floor(data.main.temp) + '°C',
      location: data.name,
    };
    dispatch(setWeatherData(newWeatherData));

    
    //Questa funzione gestisce l'intero processo di ricerca meteo. Dalla verifica se l'input è vuoto, alla chiamata all'API, all'aggiornamento dello stato Redux con i dati meteorologici e l'icona corrispondente.
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      dispatch(setWeatherIcon(clear_icon));
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      dispatch(setWeatherIcon(cloud_icon));
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      dispatch(setWeatherIcon(drizzle_icon));
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      dispatch(setWeatherIcon(drizzle_icon));
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      dispatch(setWeatherIcon(rain_icon));
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      dispatch(setWeatherIcon(rain_icon));
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      dispatch(setWeatherIcon(snow_icon));
    } else {
      dispatch(setWeatherIcon(clear_icon));
    }
  };

  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input type="text" className="cityInput" placeholder="Cerca una città" value={city} onChange={(e) => setCity(e.target.value)}/>
          <div className="search-icon" onClick={search}>
            <img
              src="../src/assets/search-svgrepo-com.svg"
              alt="cerca"
              width={"25px"}
              height={"25px"}
            />
          </div>
        </div>
        <div className="weather-image">
        <img src={weatherIcon} alt="cambio icona" width={'170px'} />
        <div className="weather-temp">{weatherData.temperature}</div>
      </div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="icone" className="icon"/>
            <div className="data">
              <div className="humidity-percent">{weatherData.humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="icone" className="icon"/>
            <div className="data">
              <div className="wind-rate">{weatherData.wind}</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default App
