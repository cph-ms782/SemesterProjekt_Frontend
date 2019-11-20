import React from "react";
import {
    Link
} from "react-router-dom";
//   import UserInfo from "./UserInfo";
function AllAboutTeam() {
    console.log("AllAboutTeam");
    return (
        <div>
            <p>AllAboutTeam</p>
            <li><Link to="/userinfo">DATA</Link></li>
        </div>
    )
}

export default AllAboutTeam;