import React from "react";

function Team() {
  const teams = ["team1", "team2", "team3"];
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <select>
      <option disabled selected value> - select a team - </option>
        {teams.map(team => {
            return <option>{team}</option>;
        })};
      </select>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"></img>
    </div>
  );
}

export default Team;
