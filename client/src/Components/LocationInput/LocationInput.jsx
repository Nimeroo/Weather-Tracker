import React from "react";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate } from "react-router-dom";

const LocationInput = ({ handleLocation }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        navigate("/main");
      }}
    >
      <label>
        <input
          onChange={(e) => {
            handleLocation(locationURLParse(e.target.value));
          }}
          placeholder="Enter your location"
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationInput;
