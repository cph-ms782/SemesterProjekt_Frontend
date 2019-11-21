import React, { useState } from "react";
import uuid from "uuid/v1";

function UserInfo({ teamName, crestURL, teamMatches, teamDates, chosenTeam, updateChosenTeam }) {
    console.log(" TEAM MATCHES " + teamMatches);
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    console.log("teamDates", teamDates);
    console.log("chosenTeam", chosenTeam);

    const willFollowTeam = (evt) => {
        console.log("willFollowTeam");
        console.log("teamName", teamName.teamName);
        const target = evt.target.checked;
        console.log("target", target);
        if (target) {
            localStorage.setItem("chosenTeam", teamName.teamName);
            localStorage.setItem("chosenTeamCrestUrl", crestURL.crestURL);
            updateChosenTeam(teamName.teamName);
        } else {
            localStorage.clear();
            updateChosenTeam("");
        }
    };


    let newTeamDates = [];

    let adjustTeamDates = () => {
        for (let index = 0; index < 4; index++) {
            newTeamDates.push(teamDates[index]);
        }
    }

    adjustTeamDates();
    console.log("newTeamDates", newTeamDates);

    return (
        <div>

            {!teamName ?
                <div></div>
                :
                <div>
                    {chosenTeam ?
                        <div>
                            <input onChange={willFollowTeam} type="checkbox" name="chosenOne" checked="true" value="true" /> <br />
                            Follow1 {chosenTeam}
                        </div>
                        :
                        <div>
                            <input onChange={willFollowTeam} type="checkbox" name="chosenOne" value="false" /> <br />
                            Follow2 {teamName.teamName}
                        </div>

                    }
                </div>
            }
            <hr />
            <b><p>Matchdates</p></b>
            {teamDates.slice(0, 3).map((team) => (
                <div>
                    <b><p key={uuid()}>{team.utcDate}</p></b>
                    <p key={uuid()}>{team.homeCity}</p>
                    <p key={uuid()}>{team.awayCity}</p>
                    <hr />
                </div>
            ))}
        </div >
    )
}

export default UserInfo;
