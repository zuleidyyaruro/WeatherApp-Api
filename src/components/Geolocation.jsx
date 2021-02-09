import React, {useState, Fragment} from "react";

import ApiWeather from "./ApiWeather";

const Geolocation = () => {

    const [latitude_, setLatitude_] = useState(0);
    const [longitude_, setLongitude_] = useState(0);

    const geoFindMe = () => {

        const handleChangeCoords = (position) => {

            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            setLatitude_(latitude);
            setLongitude_(longitude);
        };

        function error() {
            return "Unable to retrieve your location";
        };

        navigator.geolocation.getCurrentPosition(handleChangeCoords, error);
    }

    geoFindMe();

    return (
        <Fragment >
            <ApiWeather latitude={latitude_} longitude={longitude_}/>
        </Fragment>
    );
}



export default Geolocation;
