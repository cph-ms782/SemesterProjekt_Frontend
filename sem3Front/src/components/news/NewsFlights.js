import React, { } from "react";
import NewsFlightsRender from "./NewsFlightsRender";
import MatchInfo from "./MatchInfo"

function NewsFlights({ teams, teamDates, teamMatches, airports, flightHomeCity, flightAwayCity, flightTime, flightDate }) {
    console.log("NewsFlights");
    console.log("flightHomeCity ======== " + flightHomeCity);

    return (
        <div>
            <div id="flightinfo">
            <h2>Flights</h2>
                {/* <NewsFlightsRender airports={airports} flightHomeCity={flightHomeCity} flightTime={flightTime} flightDate={flightDate} /> */}
            </div>
            <div id="matchinfo">
                <MatchInfo teams={teams} teamDates={teamDates} teamMatches={teamMatches} flightDate={flightDate} flightHomeCity={flightHomeCity} flightAwayCity={flightAwayCity}/>
            </div>
        </div>
    )

}

export default NewsFlights;