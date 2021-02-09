import React, { useState, useEffect, Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faAngleDoubleRight, faWind, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'

import CountryCity from "./CountryCity";
import ImageWeather from "./ImageWeather";
import InfoWeather from "./InfoWeather";


const WeatherLayout = ({ arrayInfo }) => {

    const { city, country, weatherDescription, icon, windSpeed, clouds, pressure, temperature } = arrayInfo;

    const [temperature_, setTemperature_] = useState()
    const [temIsCelcius, setTemIsCelcius] = useState(true);
    const [degrees, setDegrees] = useState("°C");

    const handleChangeTemperature=()=>{

        setTemIsCelcius(!temIsCelcius);
        setTemperature_((temperature *(9/5))+32);

        if(temIsCelcius){
            setDegrees("°F");
        }else{
            setDegrees("°C");
        }
    }


    return (
        <div className="border container-api ">

            <h1>Weather App</h1>
            <CountryCity handleChangeTemperature country={country} city={city} />
            <ImageWeather icon={icon} />

            <p className="p-icon">
                <span>{temIsCelcius ? temperature: temperature_} </span>
                <span className="span-p">{degrees}</span>
            </p>

            <div className="property-name">
                <FontAwesomeIcon icon={faAngleDoubleRight} /> <InfoWeather style={{ textTransform: "capitalize" }} property={weatherDescription} />
            </div>
            <div className="property-name">
                <FontAwesomeIcon icon={faWind} /> <InfoWeather textComplement="m/s" text="Wind Speed: " property={windSpeed} />
            </div>
            <div className="property-name">
                <FontAwesomeIcon icon={faCloud} /> <InfoWeather textComplement="%" text="Clouds: " property={clouds} />
            </div>
            <div className="property-name">
                <FontAwesomeIcon icon={faThermometerThreeQuarters} /> <InfoWeather textComplement="mb" text="Pressure: " property={pressure} />
            </div>

            <button onClick={handleChangeTemperature}>Degrees °F / °C</button>

        </div>
    );
}

export default WeatherLayout;