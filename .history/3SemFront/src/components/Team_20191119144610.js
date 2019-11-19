import React from "react";

function Team() {
  const teams = ["team1", "team2", "team3"];
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <select>Teams
        {teams.map(team => {
          return <a href="#">{team}</a>;
        })}
      </select>
    </div>
  );
}

export default Team;
