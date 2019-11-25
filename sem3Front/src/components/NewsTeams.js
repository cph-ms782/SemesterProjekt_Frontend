import React, { } from "react";
import uuid from "uuid/v1";

function NewsTeams({ teams }) {
    console.log("NewsTeams");
    console.log("NewsTeams teams", teams);

    return (
        <div>
            <h2>Teams</h2>
            <br />
            <div>
                {teams.map((team) => (
                    <p key={uuid()}>{team.name}</p>
                ))}
            </div>
        </div>
    )
}

export default NewsTeams;