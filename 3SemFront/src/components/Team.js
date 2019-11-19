import React, { useState } from "react";

function Team({ teamName }) {
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <p>Chosen Team = {teamName.teamName}</p>
      <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"></img>
    </div>
  );
}

export default Team;
