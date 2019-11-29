import React, { } from "react";
import NewsFlightsRender from "./NewsFlightsRender";
import MatchInfo from "./MatchInfo"

function NewsFlights({ teams, airports, flightHomeCity, flightTime, flightDate, updateTicketURL, updateShowBuyImage, dummyAir }) {
    console.log("NewsFlights");
    console.log("flightHomeCity ======== " + flightHomeCity);

    return (
        <div>
            {flightDate && <div className='sidebyside'>
                <div id="flightinfo">
                    <NewsFlightsRender
                        airports={airports}
                        flightHomeCity={flightHomeCity}
                        flightTime={flightTime}
                        flightDate={flightDate}
                        updateTicketURL={updateTicketURL}
                        updateShowBuyImage={updateShowBuyImage}
                        dummyAir={dummyAir}
                    />
                </div>
                <div id="matchinfo">
                    <MatchInfo teams={teams} flightHomeCity={flightHomeCity} />
                </div>
            </div>}
        </div>
    )

}

export default NewsFlights;