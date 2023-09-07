import "./LocationInput.css";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate, useLocation } from "react-router-dom";

const LocationInput = ({ submitStatus, handleLocation, forecast }) => {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routeLocation.pathname === "/main") {
      return false;
    } else if (
      routeLocation.pathname !== "/main" &&
      forecast.status === 200 &&
      input
    ) {
      navigate("/main");
    }
  };

  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          setSubmit(true);
          handleLocation(input);
          handleSubmit(e);
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => {
            if (submit) { setInput(locationURLParse(e.target.value)) }
          }}
          error={
            (submit && forecast.status !== 200) || (submit && input === "")
          }
          helperText={
            submit && input === ""
              ? "Empty field!"
              : submit && forecast.status !== 200
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
