import React from "react";
import uuid from "uuid/v1";

function UserInfo({ teamName }) {
    const dummyList = [{ "name": "John", "age": "122" }, { "name": "Birger", "age": "27" }, { "name": "Ib", "age": "22" },];
    console.log("UserInfo");
    console.log("teamName", teamName.teamName);
    return (
        <div className="userinfo">
            <p>You're now following {teamName.teamName}</p>

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
        </div>
    )
}

export default UserInfo;
