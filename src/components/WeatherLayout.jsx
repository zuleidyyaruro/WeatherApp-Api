import React, { useState, useEffect, Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faAngleDoubleRight, faWind, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'

import CountryCity from "./CountryCity";
import ImageWeather from "./ImageWeather";
import InfoWeather from "./InfoWeather";
import ConvertDegrees from "./ConvertDegrees";

const WeatherLayout = ({ arrayInfo }) => {

    const { city, country, weatherDescription, icon, windSpeed, clouds, pressure, temperature } = arrayInfo;

    const [temps, settemps] = useState({
        data: [temperature - 273.15],
        aux: true,
        grade: "°C",
    });

    const Degrees = () => {
        const [data] = temps.data;
        if (temps.aux) {
            settemps({
                data: [(data * 9) / 5 + 32],
                aux: false,
                grade: "°F",
            });
        } else {
            settemps({
                data: [((data - 32) * 5) / 9],
                aux: true,
                grade: "°C",
            });
        }
    };


    return (
        <div className="border container-api ">

            <h1>Weather App</h1>
            <CountryCity country={country} city={city} />
            <ImageWeather icon={icon} />

           
            <p className="p-icon">
            {`${temps.data[0]}`}{" "}
            <span className="span-p">{`${temps.grade}`}</span>
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

            <ConvertDegrees handle={Degrees} />

        </div>
    );
}

export default WeatherLayout;