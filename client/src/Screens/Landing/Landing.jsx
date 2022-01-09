import LocationInput from "../../Components/LocationInput/LocationInput"

function Landing({handleSubmit, handleLocation}) {
    return (
        <div>
            <LocationInput handleSubmit={handleSubmit} handleLocation={handleLocation}/>
        </div>
    )
}

export default Landing
