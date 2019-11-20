import React, { useState } from "react";
import "../App.css";
function Team({ teamName }) {
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <p>Chosen Team = {teamName.teamName}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
        className="thumbnail"
      ></img>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
        className="img"
      ></img>
    </div>
  );
}

export default Team;
