import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { getWeatherForecast } from "./Services/api-config";
import Main from "./Screens/Main/Main";
import Landing from "./Screens/Landing/Landing";

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [forecast, setForecast] = useState({});
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Landing
              handleSubmit={handleSubmit}
              handleLocation={handleLocation}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              handleSubmit={handleSubmit}
              handleLocation={handleLocation}
              forecast={forecast}
              selectedDay={selectedDay}
              handleIndex={handleIndex}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
