import React from "react";
import { locationURLParse } from "../../Util/locationUrlParse.js";
import { useNavigate } from "react-router-dom";

const LocationInput = ({ handleSubmit, handleLocation }) => {
  const navigate = useNavigate();

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
