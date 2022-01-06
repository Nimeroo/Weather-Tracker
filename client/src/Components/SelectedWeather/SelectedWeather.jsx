import React from "react";
import { dateFormatter } from "../../Util/dateFormatter";

const SelectedWeather = ({ weatherInfo, selectedDay }) => {
  const currentDay = (
    <div>
      <div>
        <h2>{`${weatherInfo.current.temp_f}°`}</h2>
      </div>
      <div>
        <h4>Feels like</h4>
        <h3>{`${weatherInfo.current.feelslike_f}°`}</h3>
      </div>
      <div>
        <h3>{weatherInfo.current.condition.text}</h3>
      </div>
    </div>
  );

  const futureDay = (
    <div>
      <div>
        <h2>{`${weatherInfo.forecast.forecastday[selectedDay].day.avgtemp_f}°`}</h2>
      </div>
      <div>
        <div>
          <h4>High</h4>
          <h3>{`${weatherInfo.forecast.forecastday[selectedDay].day.maxtemp_f}°`}</h3>
        </div>
        <div>
          <h4>Low</h4>
          <h3>{`${weatherInfo.forecast.forecastday[selectedDay].day.mintemp_f}°`}</h3>
        </div>
      </div>
      <div>
        <h3>{weatherInfo.forecast.forecastday[selectedDay].day.condition.text}</h3>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <h1>{weatherInfo.location.name}</h1>
        <h2>
          {dateFormatter(weatherInfo.forecast.forecastday[selectedDay].date)}
        </h2>
      </div>
      {selectedDay == 0 ? currentDay : futureDay}
    </div>
  );
};

export default SelectedWeather;
