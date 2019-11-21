import React, { useState } from "react";

function Team() {
  const teams = ["team1", "team2", "team3"];
  const [chosenTeam, setChosenTeam] = useState("");
  console.log("Team");

  const handleChange = event => {
    const target = event.target;
    //const id = target.id;
    //const value = target.value;

    //setChosenTeam({...chosenTeam, [id]:value});
    setChosenTeam({...chosenTeam, target});
};
  return (
    <div>
      <p>Teeeaaaam</p>
      <select onChange={handleChange}>
      <option disabled selected value> - select a team - </option>
        {teams.map(team => {
            return <option>{team}</option>;
        })};
      </select>
        <p>{chosenTeam}</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"></img>
    </div>
  );
}

export default Team;
