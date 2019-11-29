import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

function MatchInfo({
  teams,
  teamDates,
  teamMatches,
  flightDate,
  flightHomeCity,
  flightAwayCity
}) {

  return (
    <div id="futureMatches">
      <h2>Match Details</h2>
      <h3>
      <hr />
        <br></br>- {flightDate} -<br></br>
        {flightHomeCity} -VS- {flightAwayCity}
      </h3>
      <br></br>
      <h2>
        - Upcomming matches - <br></br>
      </h2>
      <h4>
        {teamDates.map(date => (
          <div>
            <b>
              <p key={uuid()}>{date.utcDate}</p>
            </b>
            <p key={uuid()}>
              {date.homeCity} - {date.awayCity}
            </p>
            <hr />
          </div>
        ))}
      </h4>
    </div>
  );
    // console.log("TEAMDATES ======= " + JSON.stringify(teamDates));

  // const [chosenMatch, setChosenMatch] = useState("");

  // useEffect(() => {
  //   teamDates.filter(date => {
  //     console.log("trying to set match" + date.homeCity);
  //     if (date.homeCity == flightHomeCity && date.awayCity == flightAwayCity) {
  //       console.log("setting match = " + date);
  //       return (chosenMatch = date);
  //     }
  //   });
  //   console.log("ChosenMatch ==== " + JSON.stringify(chosenMatch));
  // }, []);
}

export default MatchInfo;
