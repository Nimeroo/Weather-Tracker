import "./Main.css";
import SelectedWeather from "../../Components/SelectedWeather/SelectedWeather";
import ForecastList from "../../Components/ForecastList/ForecastList";
import LocationInput from "../../Components/LocationInput/LocationInput";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";

const Main = ({
  forecast,
  selectedDay,
  handleIndex,
  handleSubmit,
  handleLocation,
}) => {
  if (!forecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="data-cont">
      <LocationInput
        handleSubmit={handleSubmit}
        handleLocation={handleLocation}
      />
      <WeatherDetails weatherInfo={forecast} selectedDay={selectedDay}>
        <SelectedWeather weatherInfo={forecast} selectedDay={selectedDay} />
      </WeatherDetails>
      <ForecastList weatherInfo={forecast} setSelectedDay={handleIndex} />
    </div>
  );
};

export default Main;
