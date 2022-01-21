import "./ForecastList.css";
import { Paper } from "@mui/material";
import { dateFormatter } from "../../Util/dateFormatter";

const ForecastList = ({ weatherInfo, setSelectedDay }) => {
  const specifiedDay = weatherInfo.data.forecast.forecastday;
  const currentDay = weatherInfo.data.current;

  return (
    <div id="forecast-list">
      <Paper elevation={10} onClick={() => setSelectedDay(0)}>
        <h3 className="date">{dateFormatter(`${specifiedDay[0].date}`)}</h3>
        <img src={currentDay.condition.icon}></img>
        <h4>{`${currentDay.temp_f} F°`}</h4>
      </Paper>
      <Paper elevation={10} onClick={() => setSelectedDay(1)}>
        <h3 className="date">{dateFormatter(`${specifiedDay[1].date}`)}</h3>
        <img src={specifiedDay[1].day.condition.icon}></img>
        <h4>{`${specifiedDay[1].day.avgtemp_f} F°`}</h4>
      </Paper>
      <Paper elevation={10} onClick={() => setSelectedDay(2)}>
        <h3 className="date">{dateFormatter(`${specifiedDay[2].date}`)}</h3>
        <img src={specifiedDay[2].day.condition.icon}></img>
        <h4>{`${specifiedDay[2].day.avgtemp_f} F°`}</h4>
      </Paper>
    </div>
  );
};

export default ForecastList;
