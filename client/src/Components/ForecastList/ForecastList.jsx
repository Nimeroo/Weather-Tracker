import "./ForecastList.css"
import react from "react";
import { dateFormatter } from "../../Util/dateFormatter";

const ForecastList = ({ weatherInfo, setSelectedDay }) => {
  return (
    //Indices are hard coded in due to there only needing to be 3 items in the list and the first item must be treated differently

    <div id="forecast-list">
      <div
        onClick={() => setSelectedDay(0)}
        src={weatherInfo.current.condition.icon}
      >
        <h3>{dateFormatter(`${weatherInfo.forecast.forecastday[0].date}`)}</h3>
        <h4>{`${weatherInfo.current.temp_f}°`}</h4>
      </div>
      <div
        onClick={() => setSelectedDay(1)}
        src={weatherInfo.forecast.forecastday[1].day.condition.icon}
      >
        <h3>{dateFormatter(`${weatherInfo.forecast.forecastday[1].date}`)}</h3>
        <h4>{`${weatherInfo.forecast.forecastday[1].day.avgtemp_f}°`}</h4>
      </div>
      <div
        onClick={() => setSelectedDay(2)}
        src={weatherInfo.forecast.forecastday[2].day.condition.icon}
      >
        <h3>{dateFormatter(`${weatherInfo.forecast.forecastday[2].date}`)}</h3>
        <h4>{`${weatherInfo.forecast.forecastday[2].day.avgtemp_f}°`}</h4>
      </div>
    </div>
  );
};

export default ForecastList;
