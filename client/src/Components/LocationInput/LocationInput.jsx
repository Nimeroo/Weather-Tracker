import "./LocationInput.css";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useLocation } from "react-router-dom";


const LocationInput = ({ setInput, input, setSubmit, submit, handleLocation, forecast }) => {
  const routeLocation = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          handleLocation(locationURLParse(input));
        }}
      >
        <TextField
          fullWidth
          autoComplete="off"
          onChange={(e) => {
            setSubmit(false)
            setInput(e.target.value)
          }
          }
          onFocus={() => setSubmit(false)}
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
