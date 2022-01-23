import "./Main.css";
import SelectedWeather from "../../Components/SelectedWeather/SelectedWeather";
import ForecastList from "../../Components/ForecastList/ForecastList";
import LocationInput from "../../Components/LocationInput/LocationInput";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";

const Main = ({
  scrollTo,
  mainReference,
  forecast,
  selectedDay,
  handleIndex,
  handleLocation,
}) => {
  if (!forecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="main-data-cont" ref={mainReference}>
      <LocationInput
        forecast={forecast}
        handleLocation={handleLocation}
      />
      <WeatherDetails weatherInfo={forecast} selectedDay={selectedDay}>
        <SelectedWeather weatherInfo={forecast} selectedDay={selectedDay} />
      </WeatherDetails>
      <ForecastList weatherInfo={forecast} setSelectedDay={handleIndex} scrollTo={scrollTo} />
    </div>
  );
};

export default Main;
