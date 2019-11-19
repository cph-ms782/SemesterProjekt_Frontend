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
        })}
      </select>
    </div>
  );
}

export default Team;
