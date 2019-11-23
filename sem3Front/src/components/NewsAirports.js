import React, { } from "react";
import uuid from "uuid/v1";

function NewsAirports({ airports }) {
    console.log("NewsAirports");
    console.log("airports", airports);

    return (
        <div>
            <h2>Airports</h2>
            <br />
            {airports.map((airport) => {
                return <p key={uuid()}>{airport}</p>
            })}
        </div>
    )
}

export default NewsAirports;