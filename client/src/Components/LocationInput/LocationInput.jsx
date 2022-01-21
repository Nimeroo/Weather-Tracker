import "./LocationInput.css";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate } from "react-router-dom";

const LocationInput = ({ handleLocation, forecast }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (forecast.status === 200 && input) {
      navigate("/main");
    }
  };

  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => {
            handleLocation(locationURLParse(e.target.value));
            setInput(locationURLParse(e.target.value));
          }}
          error={
            (submitted && forecast.status !== 200) ||
            (submitted && input === "")
          }
          helperText={
            submitted && input === ""
              ? "Empty field!"
              : submitted && forecast.status !== 200
              ? "That city does not exist"
              : ""
          }
          label="Enter your location"
        ></TextField>
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default LocationInput;
