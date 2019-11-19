import React from "react";

function Team() {
  const teams = ["team1", "team2", "team3"];
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <div class="dropdown-content" id="myDropdown">
        {
            teams.map() => (team) {
            <a href="#">team.value</a>
            }
        }
      </div>
    </div>
  );
}

export default Team;
