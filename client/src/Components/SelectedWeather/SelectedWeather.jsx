import "./SelectedWeather.css";
import { Paper } from "@mui/material";
import { dateFormatter } from "../../Util/dateFormatter";

const SelectedWeather = ({ weatherInfo, selectedDay }) => {
  const specifiedDay = weatherInfo.data.forecast.forecastday[selectedDay];
  const currentDay = weatherInfo.data.current;

  const presentDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${currentDay.temp_f} °F`}</h1>
      </div>
      <div>
        <h3>{`Feels like: ${currentDay.feelslike_f} °F`}</h3>
      </div>
      <div className="weather-condition-cont">
        <img alt={currentDay.condition.text} src={currentDay.condition.icon}></img>
        <h3>{currentDay.condition.text}</h3>
      </div>
    </div>
  );

  const futureDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${specifiedDay.day.avgtemp_f} °F`}</h1>
      </div>
      <div>
        <div>
          <h3>{`High: ${specifiedDay.day.maxtemp_f} °F`}</h3>
        </div>
        <div>
          <h3>{`Low: ${specifiedDay.day.mintemp_f} °F`}</h3>
        </div>
      </div>
      <div className="weather-condition-cont">
        <img alt={specifiedDay.day.condition.text} src={specifiedDay.day.condition.icon}></img>
        <h3>{specifiedDay.day.condition.text}</h3>
      </div>
    </div>
  );

  return (
    <Paper elevation={24} id="main-weather-cont">
      <div id="city-date-cont">
        <h1>{weatherInfo.data.location.name}</h1>
        <h4>
          {dateFormatter(
            `${specifiedDay.date}`
          )}
        </h4>
      </div>
      {selectedDay === 0 ? presentDay : futureDay}
    </Paper>
  );
};

export default SelectedWeather;
