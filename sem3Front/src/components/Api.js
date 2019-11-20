import React from "react";

function Api() {
    console.log("Api");
    return (
        <div>
            <h3>endpoints</h3>
            <p><strong>All</strong> </p>
            <ul>
                <li>/api/info </li>
                <li>/api/info/all </li>
                <li>/api/login </li>
                <li>/api/info/fill </li>
            </ul>
            <p><strong>City</strong> </p>
            <ul>
                <li>/api/city </li>
                <li>/api/city/cities </li>
                <li>/api/fb/teams </li>
            </ul>
            <p><strong>Match</strong> </p>
            <ul>
                <li>/api/match </li>
                <li>/api/match/city --&gt; ie city = Liverpool </li>
            </ul>
            <p><strong>User</strong> </p>
            <ul>
                <li>/api/info/user </li>
            </ul>
            <p><strong>Admin</strong> </p>
            <ul>
                <li>/api/info/user </li>
                <li>/api/info/admin </li>
            </ul>
        </div>
    )
}

export default Api;