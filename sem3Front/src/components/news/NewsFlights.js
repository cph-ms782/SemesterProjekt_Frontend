import React, { } from "react";
import NewsFlightsRender from "./NewsFlightsRender";

function NewsFlights({ airports, flightHomeCity, flightTime, flightDate }) {
    console.log("NewsFlights");

    return (
        <div>
            <h2>Flights</h2>
            {<NewsFlightsRender airports={airports} flightHomeCity={flightHomeCity} flightTime={flightTime} flightDate={flightDate} />}
        </div>
    )

}

export default NewsFlights;