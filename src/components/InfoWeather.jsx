import { Fragment } from "react";

const InfoWeather =({text, property, textComplement})=>{

    return (
        <Fragment>
            <span>{text} {property} {textComplement} </span>   
        </Fragment>
    );
};

export default InfoWeather;