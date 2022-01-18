import "./WeatherDetails.css";
import React from "react";

const WeatherDetails = ({ children, weatherInfo, selectedDay }) => {
  const specifiedDay = weatherInfo.forecast.forecastday[selectedDay].day;

  return (
    <div id="selected-weather-cont">
      <div className="weather-details">
        <div>
          <h3>{`Wind speed: ${specifiedDay.maxwind_mph} mph`}</h3>
        </div>
        <div>
          <h3>{`Chance of rain: ${specifiedDay.daily_chance_of_rain}%`}</h3>
          <h3>{`Chance of snow: ${specifiedDay.daily_chance_of_snow}%`}</h3>
        </div>
      </div>
      {children}
      <div id="left-weather-detail" className="weather-details">
        <div>
          <h3>{`Visibility: ${specifiedDay.avgvis_miles} miles`}</h3>
        </div>
        <div>
          <h3>{`Humidity: ${specifiedDay.avghumidity}%`}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
