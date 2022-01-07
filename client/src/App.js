import "./App.css";
import { useState } from "react";
import { getWeatherForecast } from "./Services/api-config";
import Main from "./Screens/Main/Main";
import Landing from "./Screens/Landing/Landing";


function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  const currentForecast = async () => {
    let fetchForecast = await getWeatherForecast(location);
    setForecast(fetchForecast.data);
  };

  const handleIndex = (index) => {
    setSelectedDay(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentForecast();
  };

  const handleLocation = (input) => {
    setLocation(input);
  };

  return (
    <div className="App">
      <Landing handleSubmit={handleSubmit} handleLocation={handleLocation}/>
      <Main
        handleSubmit={handleSubmit}
        handleLocation={handleLocation}
        forecast={forecast}
        selectedDay={selectedDay}
        handleIndex={handleIndex}
      />
    </div>
  );
}

export default App;
