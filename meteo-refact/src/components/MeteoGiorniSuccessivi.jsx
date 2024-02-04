/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { format, addDays } from 'date-fns';
import { it } from 'date-fns/locale';
import { Row, Col } from 'react-bootstrap';
import { setWeatherData, setWeatherIcon } from '../redux/actions';

import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import rain_icon from '../assets/rain.png';
import drizzle_icon from "../assets/drizzle.png";
import snow_icon from "../assets/snow.png";
import star_icon from "../assets/dlf.pt-whatsapp-chat-bubble-png-5416572.png";

const MeteoGiorniSuccessivi = () => {
  const dispatch = useDispatch();

  const previsioneGiorni = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
  let api_key = "a917aee100fe859189144ea39c08002c";
  let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${element[0].value}&units=metric&APPID=${api_key}`;

  let response = await fetch(url);
    let data = await response.json();

  const newWeatherData = {
    temperature: Math.floor(data.main.temp) + "°C",
  };
  dispatch(setWeatherData(newWeatherData));

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
      dispatch(setWeatherIcon(star_icon));
    }
};

  //useSelector per estrarre i dati meteorologici dallo store Redux
  const { weatherData, weatherIcon } = useSelector((state) => state);

  // Ottieni la data corrente
  const giornoCorrente = new Date();

  //array con i dati del meteo per i prossimi 3 giorni
  const meteoGiorniSuccessivi = Array.from({ length: 3 }, (_, index) => {
    const giornoDopo = addDays(giornoCorrente, index + 1);
    const giornoFormatted = format(giornoDopo, 'EEEE', { locale: it });

    return {
      giorno: giornoFormatted,
      icona: weatherIcon,
    }
  });

  return (
    <div>
      <h4 className='text-center text-white' id='prossimi'>Meteo dei prossimi 3 giorni</h4>
      <div id='Giorni'>{previsioneGiorni}</div>
      <Row className='list-inline d-flex text-center'>
        {meteoGiorniSuccessivi.map((meteoGiorno, index) => (
          <Col key={index} className='list-inline text-white'>
            <div className='text-center'>{meteoGiorno.giorno}      
          <p id='gradi' className="weather-temp">{weatherData.temperature}</p>
            <img src={meteoGiorno.icona} alt={`Icona meteo ${meteoGiorno.giorno}`}
            width={"50px"}/>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeteoGiorniSuccessivi;