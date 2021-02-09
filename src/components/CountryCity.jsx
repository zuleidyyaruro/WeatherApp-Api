import { Fragment } from "react";

const CountryCity =({city, country})=>{

    return (
        <Fragment>
            <h3>{country} / {city}</h3>
        </Fragment>
    );
};

export default CountryCity;