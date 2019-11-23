import React, { } from "react";
import uuid from "uuid/v1";

function NewsTeams({ teams }) {
    console.log("NewsTeams");

    return (
        <div>
            <h2>Teams</h2>
            <br />
            {teams.map((team) => {
                return <p key={uuid()}>{team.name}</p>
            })}
        </div>
    )
}

export default NewsTeams;