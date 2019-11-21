import React, { useState } from "react";
import uuid from "uuid/v1";

function UserInfo({ teamName, crestURL, teamMatches, teamDates }) {
    console.log(" TEAM MATCHES " + teamMatches);
    const dummyList = [{ "name": "John", "age": "122" }, { "name": "Birger", "age": "27" }, { "name": "Ib", "age": "22" },];
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
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


            <table>
                <thead>
                    <tr><th>Last 3 games played</th></tr>
                </thead>
                <tbody>
                    <tr><th>Home Team</th></tr>
                        <tr><td>{teamMatches/*.teamName*/}</td></tr>
                        <tr><th>Away Team</th></tr>
                        <tr><td>{teamDates/*.teamName*/}</td></tr>
                </tbody>
            </table>
        </div >
    )
}

export default UserInfo;
