import React, { } from "react";
import uuid from "uuid/v1";

const Search = ({ teamName, updateTeamName, facade }) => {
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

  // const getTeams = () => {
  //   console.log("getTeams");
  // }

  return (
    <div>
      <p>Searching </p>
      <select onChange={handleChange} id="teamName">
        <option disabled value> - select a team - </option>
        {teams.map(team => {
          return <option key={uuid()}>{team}</option>;
        })};
        </select>
    </div >
  );
}

export default Search;
