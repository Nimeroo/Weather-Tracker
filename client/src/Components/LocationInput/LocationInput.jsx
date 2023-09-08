import "./LocationInput.css";
import { useEffect, useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate, useLocation } from "react-router-dom";

const LocationInput = ({ submitStatus, handleLocation, forecast }) => {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [userLocation, setUserLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`)
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }

  fetchLocation()

  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          handleLocation(input);
          handleSubmit(e);
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => {
            setInput(locationURLParse(e.target.value))
          }}
          error={
            (submit && forecast.status === 400) || (submit && input === "" && forecast.status == 400)
          }
          helperText={
            submit && input === "" && forecast.status == 400
              ? "Empty field!"
              : submit && forecast.status === 400
                ? "That city does not exist"
                : ""
          }
          label="Enter your city, zip code or postcode"
        ></TextField>
        {routeLocation.pathname === "/" ? (
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        ) : null}
      </form>
    </div>
  );
};

export default LocationInput;
