import { Fragment } from "react";

const ImageWeather =({ icon})=>{

    return (
        <Fragment>  
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
        </Fragment>
    );
};

export default ImageWeather;