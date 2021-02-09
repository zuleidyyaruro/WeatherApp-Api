import { Fragment, useEffect, useState } from "react"

import WeatherLayout from "./WeatherLayout"

const ApiWeather = ({ latitude, longitude }) => {

    const [array_, setArray_] = useState([]);

    useEffect(() => {
        getData();
    })

    const getData = () => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9bce75cbece1baa801bd19ab6cf4fc54&units=metric`)
            .then((response) => response.json())
            .then((data) => handleChangeArrayData(data))
    }

    const handleChangeArrayData = (data) => {
        setArray_({
            city: data.name,
            country: codeCountry(data),
            weatherDescription: data.weather[0].description,
            temperature:(data.main.temp).toString(),
            icon: data.weather[0].icon,
            windSpeed: data.wind.speed,
            clouds: data.clouds.all,
            pressure: data.main.pressure,});
    }

    const codeCountry = (data) => {

        let country_ = "";

        switch (data.sys.country) {

            case "CO":
                country_ = "Colombia";
                break;
            case "MX":
                country_ = "Mexico";
                break;
            case "EC":
                country_ = "Ecuador";
                break;
            case "AR":
                country_ = "Argentina";
                break;
            case "VE":
                country_ = "Venzuela";
                break;
            case "UY":
                country_ = "Uruguay";
                break;
            case "US":
                country_ = "Estados Unidos de América";
                break;
            case "TR":
                country_ = "Turquía";
                break;
            case "BR":
                country_ = "Brasil";
                break;
            case "PA":
                country_ = "Panamá";
                break;
            case "PE":
                country_ = "Perú";
                break;
        }
        return country_;
    }

    return (
        <Fragment >
            <WeatherLayout arrayInfo={array_}/>
        </Fragment>
    )

}

export default ApiWeather;
