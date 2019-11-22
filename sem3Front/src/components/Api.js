import React from "react";

function Api() {
    console.log("Api");
    return (
        <div>

            <h2>Endpoints</h2>
            <br />
            {/* <p><strong>All</strong> </p>
            <ul>
                <li>/api/info </li>
                <li>/api/info/all </li>
                <li>/api/login </li>
                <li>/api/info/fill </li>
            </ul>
            <br /> */}
            <p><strong>City</strong> </p>
            <ul>
                <li>/api/city - dummy data</li>
                <li>/api/city/cities - dummy data</li>
            </ul>
            <br />
            <p><strong>Match</strong> </p>
            <ul>
                <li>/api/match </li>
                <li>/api/match/<b>city</b> --&gt; ie. for Liverpool: <b>city = Liverpool </b></li>
                <li>/api/match/<b>city</b> --&gt; ie. for Liverpool: <b>city = Liverpool </b></li>
                <li>/api/fb/teams </li>
                <li>/api/fb/allteammatchdates/<b>id</b> --&gt; ie. for Arsenal: <b>id = 57 </b></li>
                <li>/api/fb/allteammatchresults/<b>id</b> --&gt; ie. for Arsenal: <b>id = 57  </b></li>
            </ul>
            <br />
            {/* <p><strong>User</strong> </p>
            <ul>
                <li>/api/info/user </li>
            </ul>
            <br />
            <p><strong>Admin</strong> </p>
            <ul>
                <li>/api/info/user </li>
                <li>/api/info/admin </li>
            </ul> */}
        </div>
    )
}

export default Api;