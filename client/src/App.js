import "./App.css";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "./Services/api-config";

function App() {
  const [selectedWeather, setSelectedWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(async () => {
    let fetchForecast = await getWeatherForecast(location);
    setForecast(fetchForecast);
  }, [location]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
