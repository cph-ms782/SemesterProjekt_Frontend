import React, { } from "react";

const Search = ({ teamName, updateTeamName }) => {
  console.log("Search");
  console.log("teamName", teamName);
  const teams = ["team1", "team2", "team3"];

  const handleChange = (evt) => {
    console.log("handleChange");
    const target = evt.target;
    const id = evt.target.id;
    console.log("target.value", target.value);
    updateTeamName({ ...teamName, [id]: target.value });
    console.log("teamName", teamName);
  }

  return (
    <div>
      <p>Searching </p>
      <select onChange={handleChange} id="teamName">
        <option disabled selected value> - select a team - </option>
        {teams.map(team => {
          return <option>{team}</option>;
        })};
        </select>
    </div >
  );
}

export default Search;
