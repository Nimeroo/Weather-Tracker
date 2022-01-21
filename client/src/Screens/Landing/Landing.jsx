import "./Landing.css";
import LocationInput from "../../Components/LocationInput/LocationInput";

function Landing({ handleLocation, forecast }) {
  return (
    <div id="landing-cont">
      <LocationInput forecast={forecast} handleLocation={handleLocation} />
    </div>
  );
}

export default Landing;
