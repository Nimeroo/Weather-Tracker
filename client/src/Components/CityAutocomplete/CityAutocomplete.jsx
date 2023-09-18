import './CityAutocomplete.css';
import React from 'react';
import { Box } from '@mui/material';
import { locationURLParse } from '../../Util/locationUrlParse.js';
import citySuggestion from '../../Util/citySuggestion';


const CityAutocomplete = ({ setInput, input, setSubmit, handleLocation }) => {

    return (
        <Box id="suggestion-container">{
            citySuggestion(input).map(city => {
                return (
                    <h4 id="suggestion-items" key={city} onClick={() => {
                        handleLocation(locationURLParse(city))
                        setSubmit(true)
                    }}>
                        {city}
                    </h4>
                )
            })}</Box>)
}

export default CityAutocomplete