import SelectedWeather from "../../Components/SelectedWeather/SelectedWeather";
import ForecastList from "../../Components/ForecastList/ForecastList";
import LocationInput from "../../Components/LocationInput/LocationInput";

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
    <div>
      <LocationInput
        handleSubmit={handleSubmit}
        handleLocation={handleLocation}
      />
      <SelectedWeather weatherInfo={forecast} selectedDay={selectedDay} />
      <ForecastList weatherInfo={forecast} setSelectedDay={handleIndex} />
    </div>
  );
};

export default Main;
