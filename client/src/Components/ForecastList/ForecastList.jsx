import "./ForecastList.css";
import react from "react";
import { Paper } from "@mui/material";
import { dateFormatter } from "../../Util/dateFormatter";

const ForecastList = ({ weatherInfo, setSelectedDay }) => {
  return (
    //Indices are hard coded in due to there only needing to be 3 items in the list and the first item must be treated differently

    <div id="forecast-list">
      <Paper elevation={10} onClick={() => setSelectedDay(0)}>
        <h3 className="date">{dateFormatter(`${weatherInfo.forecast.forecastday[0].date}`)}</h3>
        <img src={weatherInfo.current.condition.icon}></img>
        <h4>{`${weatherInfo.current.temp_f} F°`}</h4>
      </Paper>
      <Paper elevation={10} onClick={() => setSelectedDay(1)}>
        <h3 className="date">{dateFormatter(`${weatherInfo.forecast.forecastday[1].date}`)}</h3>
        <img src={weatherInfo.forecast.forecastday[1].day.condition.icon}></img>
        <h4>{`${weatherInfo.forecast.forecastday[1].day.avgtemp_f} F°`}</h4>
      </Paper>
      <Paper elevation={10} onClick={() => setSelectedDay(2)}>
        <h3 className="date">{dateFormatter(`${weatherInfo.forecast.forecastday[2].date}`)}</h3>
        <img src={weatherInfo.forecast.forecastday[2].day.condition.icon}></img>
        <h4>{`${weatherInfo.forecast.forecastday[2].day.avgtemp_f} F°`}</h4>
      </Paper>
    </div>
  );
};

export default ForecastList;
