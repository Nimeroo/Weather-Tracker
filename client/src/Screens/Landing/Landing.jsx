import "./Landing.css";
import LocationInput from "../../Components/LocationInput/LocationInput";

function Landing({ handleLocation }) {
  return (
    <div id="landing-cont">
      <LocationInput handleLocation={handleLocation} />
    </div>
  );
}

export default Landing;
