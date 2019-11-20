import React from "react";

function UserInfo({ teamName }) {
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    return (
        <div>
            <p>UserInfo</p>
            You're now following {teamName.teamName}
        </div>
    )
}

export default UserInfo;