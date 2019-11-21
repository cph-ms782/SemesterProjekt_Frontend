import React, { useState } from "react";
import uuid from "uuid/v1";

function UserInfo({ teamName, crestURL, teamMatches, teamDates }) {
    console.log(" TEAM MATCHES " + teamMatches);
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    console.log("teamDates", teamDates);
    const chosenTeam = localStorage.getItem("chosenTeam");
    const [followTeam, setFollowTeam] = useState(chosenTeam ? true : false);
    console.log("chosenTeam", chosenTeam);
    console.log("followTeam", followTeam);

    const willFollowTeam = (evt) => {
        console.log("willFollowTeam");
        console.log("teamName", teamName.teamName);
        const target = evt.target.checked;
        console.log("target", target);
        if (target) {
            localStorage.setItem("chosenTeam", teamName.teamName);
            localStorage.setItem("chosenTeamCrestUrl", crestURL.crestURL);
            setFollowTeam(true);
        } else {
            localStorage.clear();
            setFollowTeam(false);
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
                            <input onChange={willFollowTeam} type="checkbox" name="chosenOne" value="true" /> <br />
                            Follow {chosenTeam}
                        </div>
                        :
                        <div>
                            <input onChange={willFollowTeam} type="checkbox" name="chosenOne" value="false" /> <br />
                            Follow {teamName.teamName}
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
