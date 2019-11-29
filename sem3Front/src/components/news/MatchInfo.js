import React from "react";

function MatchInfo({ teams, flightHomeCity }) {
    console.log("teams data =========" + teams);

    return (
        <div>
            <h2>Match Details</h2>
            <h3>flightHomeCity</h3>
            <h3>{flightHomeCity}</h3>
        </div>
    )

}

export default MatchInfo;