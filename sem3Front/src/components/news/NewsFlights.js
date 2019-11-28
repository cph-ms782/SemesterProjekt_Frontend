import React, { } from "react";
import NewsFlightsRender from "./NewsFlightsRender";

function NewsFlights({ teams, airports, flightHomeCity, flightTime, flightDate }) {
    console.log("NewsFlights");

    return (
        <div>
            <h2>Flights</h2>
            <div id="matchinfo">
                <MatchInfo teams={teams} />
            </div>
            <div id="flightinfo">
                <NewsFlightsRender airports={airports} flightHomeCity={flightHomeCity} flightTime={flightTime} flightDate={flightDate} />
            </div>
        </div>
    )

}

export default NewsFlights;