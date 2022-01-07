import React from "react";
import { locationURLParse } from "../../Util/locationUrlParse.js";

const LocationInput = ({ handleSubmit, handleLocation }) => {
  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
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
