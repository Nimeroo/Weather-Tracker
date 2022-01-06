import "./App.css";
import { useState } from "react";
import { getWeatherForecast } from "./Services/api-config";
import { locationURLParse } from "./Util/locationUrlParse";
import SelectedWeather from "./Components/SelectedWeather/SelectedWeather";

function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  const currentForecast = async () => {
    let fetchForecast = await getWeatherForecast(location);
    setForecast(fetchForecast.data);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          currentForecast();
        }}
      >
        <label>
          <input
            onChange={(e) => {
              setLocation(locationURLParse(e.target.value));
            }}
            placeholder="Enter your location"
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <SelectedWeather weatherInfo={forecast} selectedDay={selectedDay} />
    </div>
  );
}

export default App;
