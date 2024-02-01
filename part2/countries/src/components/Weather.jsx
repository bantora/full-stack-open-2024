import { useEffect, useState } from "react";
import { getWeather } from "../services/weather";

//create your own .env with your openweather key
const Weather = ({ country }) => {
  const [weather, setWeather] = useState();
  console.log(weather);

  useEffect(() => {
    getWeather(...country.latlng).then((res) => setWeather(res));
  }, [country.latlng]);

  return (
    <div>
      <h2>Weather in {country.name.common}</h2>

      <div>temperature {weather?.main.temp} Celcius</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
      />

      <div>wind {weather?.wind.speed} m/s</div>
    </div>
  );
};

export default Weather;
