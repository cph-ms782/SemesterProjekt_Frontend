import React, { } from "react";
import uuid from "uuid/v1";

function NewsTeams({ teams }) {
    console.log("NewsTeams");
    console.log("NewsTeams teams", teams);
    const id = 57;
    const newTeams = teams.filter((team) => {
        return team.teamID == id;
    });
    console.log("newTeams", newTeams);

    return (
        <div>
            <h2>Teams</h2>
            <br />
            <div>
                {teams.map((team, index) => (
                    <p key={uuid()}>{team.teamID} {team.name} {team.tla}</p>
                ))}
                <h1>Searching for team ID 57</h1>
                {newTeams.map((team) => (
                    <p key={uuid()}>{team.teamID} {team.name} {team.tla}</p>
                ))}
            </div>
        </div>
    )
}

export default NewsTeams;