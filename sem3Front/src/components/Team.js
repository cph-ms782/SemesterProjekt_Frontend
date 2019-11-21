import React, { } from "react";
function Team({ teamName, crestURL }) {
  console.log("Team");
  console.log("crestURL", crestURL);
  console.log("teamName", teamName);
  const chosenTeam = localStorage.getItem("chosenTeam");
  const chosenTeamCrestUrl = localStorage.getItem("chosenTeamCrestUrl");
  return (
    <div className="team">
      {!teamName ?
        <p style={{ fontSize: 20 }}>choose team</p> :
        <div>

          {!chosenTeam ? <div><img alt="teamIcon" src={crestURL.crestURL} className="thumbnail" /></div> :
            <div><img alt="teamIcon" src={chosenTeamCrestUrl} className="thumbnail" /></div>}

        </div>
      }
    </div >
  );
}

export default Team;