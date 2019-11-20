import React from "react";

function UserInfo({ teamName }) {
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    return (
        <div>
            <p>UserInfo</p>
            {teamName.teamName}
        </div>
    )
}

export default UserInfo;