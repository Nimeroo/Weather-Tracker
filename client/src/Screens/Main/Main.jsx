import "./Main.css";
import SelectedWeather from "../../Components/SelectedWeather/SelectedWeather";
import ForecastList from "../../Components/ForecastList/ForecastList";
import LocationInput from "../../Components/LocationInput/LocationInput";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";
import CityAutocomplete from "../../Components/CityAutocomplete/CityAutocomplete";


const Main = ({
  scrollTo,
  mainReference,
  forecast,
  selectedDay,
  handleIndex,
  handleLocation,
  setInput,
  input,
  setSubmit,
  submit
}) => {
  if (!forecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="main-data-cont" ref={mainReference}>
      <LocationInput
        forecast={forecast}
        handleLocation={handleLocation}
        setInput={setInput}
        input={input}
        setSubmit={setSubmit}
        submit={submit}
      />
      {
        !submit && input.length > 1 && <CityAutocomplete setInput={setInput} input={input} setSubmit={setSubmit} handleLocation={handleLocation}/>
      }
      {
        forecast.status === 200 &&
        <><WeatherDetails weatherInfo={forecast} selectedDay={selectedDay}>
          <SelectedWeather weatherInfo={forecast} selectedDay={selectedDay} />
        </WeatherDetails>
          <ForecastList weatherInfo={forecast} selectedDay={selectedDay} setSelectedDay={handleIndex} scrollTo={scrollTo} mainReference={mainReference} /></>
      }
    </div>
  );
};

export default Main;
