import "./SelectedWeather.css"
import React from "react";
import { dateFormatter } from "../../Util/dateFormatter";

const SelectedWeather = ({ weatherInfo, selectedDay }) => {
  const currentDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${weatherInfo.current.temp_f} °F`}</h1>
      </div>
      <div>
        <h3>{`Feels like: ${weatherInfo.current.feelslike_f} °F`}</h3>
      </div>
      <div className="weather-condition-cont">
        <img src={weatherInfo.current.condition.icon}></img>
        <h3>{weatherInfo.current.condition.text}</h3>
      </div>
    </div>
  );

  const futureDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${weatherInfo.forecast.forecastday[selectedDay].day.avgtemp_f} °F`}</h1>
      </div>
      <div>
        <div>
          <h3>{`High: ${weatherInfo.forecast.forecastday[selectedDay].day.maxtemp_f} °F`}</h3>
        </div>
        <div>
          <h3>{`Low: ${weatherInfo.forecast.forecastday[selectedDay].day.mintemp_f} °F`}</h3>
        </div>
      </div>
      <div className="weather-condition-cont">
        <img src={weatherInfo.forecast.forecastday[selectedDay].day.condition.icon}></img>
        <h3>{weatherInfo.forecast.forecastday[selectedDay].day.condition.text}</h3>
      </div>
    </div>
  );

  return (
    <div id="main-weather-cont">
      <div id="city-date-cont">
        <h1>{weatherInfo.location.name}</h1>
        <h4>
          {dateFormatter(`${weatherInfo.forecast.forecastday[selectedDay].date}`)}
        </h4>
      </div>
      {selectedDay == 0 ? currentDay : futureDay}
    </div>
  );
};

export default SelectedWeather;
