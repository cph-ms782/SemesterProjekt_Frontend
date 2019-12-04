import React, { } from "react";
import uuid from "uuid/v1";

function NextMatch({ teamDates }) {
  console.log("NextMatch");
  console.log("NextMatch teamDates", teamDates);

  if (teamDates) {
    return (
      <div>
        <div>
          <b><p>Next Match</p></b>
        </div>
        <div className="">
          {
            teamDates.slice(0, 1).map((team) => (
              <div>
                <b><p key={uuid()}>{team.utcDate}</p></b>
                <p key={uuid()}>{team.homeCity}</p>
                <p key={uuid()}>{team.awayCity}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  } else {
    return (
      <p>Pending team dates</p>
    )
  }
}

export default NextMatch;
