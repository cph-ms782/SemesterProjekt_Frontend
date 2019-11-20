import React from "react";

function UserInfo({ teamName }) {
    const dummyList = [{"name":"John", "age":"122"},{"name":"Birger", "age":"27"},{"name":"Ib", "age":"22"}, ];
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    return (
        <div>
            <p>UserInfo</p>
            You're now following {teamName.teamName}
            <table>
                <thead>
                <th>Name</th><th>Age</th>
                </thead>
                <tbody>
                    {dummyList.map((team) => (
                    <td>{team.name}</td><td>{team.age}</td>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo;