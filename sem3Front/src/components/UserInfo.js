import React, { useState } from "react";
import uuid from "uuid/v1";

function UserInfo({ teamName, crestURL }) {
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
                    <tr><th>Name</th><th>Age</th></tr>
                </thead>
                <tbody>
                    {dummyList.map((team) => (
                        <tr key={uuid()}><td>{team.name}</td><td>{team.age}</td></tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UserInfo;
