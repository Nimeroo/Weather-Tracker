import "./LocationInput.css";
import React from "react";
import { TextField } from "@mui/material";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate } from "react-router-dom";

const LocationInput = ({ handleLocation }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          navigate("/main");
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => {
            handleLocation(locationURLParse(e.target.value));
          }}
          label="Enter your location"
        ></TextField>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LocationInput;
