import "./SelectedWeather.css";
import { Paper } from "@mui/material";
import { dateFormatter } from "../../Util/dateFormatter";

const SelectedWeather = ({ weatherInfo, selectedDay }) => {
  const specifiedDay = weatherInfo.data.forecast.forecastday[selectedDay].day;
  const currentDay = weatherInfo.data.current;

  const currentDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${currentDay.temp_f} °F`}</h1>
      </div>
      <div>
        <h3>{`Feels like: ${currentDay.feelslike_f} °F`}</h3>
      </div>
      <div className="weather-condition-cont">
        <img src={currentDay.condition.icon}></img>
        <h3>{currentDay.condition.text}</h3>
      </div>
    </div>
  );

  const futureDay = (
    <div className="temp-details-cont">
      <div>
        <h1>{`${specifiedDay.avgtemp_f} °F`}</h1>
      </div>
      <div>
        <div>
          <h3>{`High: ${specifiedDay.maxtemp_f} °F`}</h3>
        </div>
        <div>
          <h3>{`Low: ${specifiedDay.mintemp_f} °F`}</h3>
        </div>
      </div>
      <div className="weather-condition-cont">
        <img src={specifiedDay.condition.icon}></img>
        <h3>{specifiedDay.condition.text}</h3>
      </div>
    </div>
  );

  return (
    <Paper elevation={24} id="main-weather-cont">
      <div id="city-date-cont">
        <h1>{weatherInfo.data.location.name}</h1>
        <h4>
          {dateFormatter(
            `${weatherInfo.data.forecast.forecastday[selectedDay].date}`
          )}
        </h4>
      </div>
      {selectedDay == 0 ? currentDay : futureDay}
    </Paper>
  );
};

export default SelectedWeather;
