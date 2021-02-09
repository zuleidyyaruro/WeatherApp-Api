import { Fragment } from "react";

const ConvertDegrees =({handle})=>{

    return (
        <Fragment>
            <button onClick={handle}>Degrees °F / °C</button>
        </Fragment>
    );
};

export default ConvertDegrees;