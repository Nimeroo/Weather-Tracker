import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createRef } from "react";
import { getWeatherForecast } from "./Services/api-config";
import Main from "./Screens/Main/Main";
import Landing from "./Screens/Landing/Landing";

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");

  const mainReference = createRef()
  
  useEffect(() => {
    const fetchForecast = async () => {
      const currentForecast = await getWeatherForecast(location);
      if (currentForecast) {
        setForecast(currentForecast);
      }
    };
    fetchForecast();
  }, [location]);

  const scrollTo = (ref) => {
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop - 40,
      behavior: 'smooth'
    });
  }

  const handleIndex = (index) => {
    setSelectedDay(index);
  };

  const handleLocation = (input) => {
    setLocation(input);
  };

  return (
    <div className="App">
      <h1>Weather Tracker</h1>
      <div id="main-cont">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Landing
                forecast={forecast}
                handleLocation={handleLocation}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                mainReference={mainReference}
                scrollTo={scrollTo}
                handleLocation={handleLocation}
                forecast={forecast}
                selectedDay={selectedDay}
                handleIndex={handleIndex}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
