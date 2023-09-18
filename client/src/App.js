import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createRef } from "react";
import { getWeatherForecast } from "./Services/api-config";
import Main from "./Screens/Main/Main";

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [forecast, setForecast] = useState({});
  const [userLocation, setUserLocation] = useState("");
  const [location, setLocation] = useState("");
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);

  const mainReference = createRef();

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation(`${latitude},${longitude}`);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
      if (location === "") setLocation(userLocation);
    };
    fetchLocation();
  }, [userLocation]);

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
      behavior: "smooth",
    });
  };

  const handleIndex = (index) => {
    setSelectedDay(index);
  };

  const handleLocation = (input) => {
    setLocation(input);
  };

  return (
    <div className="App">
      <header className="header">
      <img className="logo" alt="Logo" src={require("./Cloud-Icon.png")}></img> 
      <h1>Weather Tracker</h1>
      </header>
      <div id="main-cont">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                mainReference={mainReference}
                scrollTo={scrollTo}
                handleLocation={handleLocation}
                forecast={forecast}
                selectedDay={selectedDay}
                handleIndex={handleIndex}
                setInput={setInput}
                input={input}
                setSubmit={setSubmit}
                submit={submit}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
