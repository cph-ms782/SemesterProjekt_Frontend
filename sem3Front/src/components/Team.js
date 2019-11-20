import React, { } from "react";
function Team({ teamName, crestURL }) {
  console.log("Team");
  console.log("crestURL", crestURL);
  console.log("teamName", teamName);
  return (
    <div className="team">
      {!teamName ?
        <div><p>choose team</p></div> :
        <div><p>{teamName.teamName}</p>
          <img
            alt={teamName.teamName}
            src={crestURL.crestURL}
            className="thumbnail"
          />
        </div>
      }
    </div>
  );
}

export default Team;
