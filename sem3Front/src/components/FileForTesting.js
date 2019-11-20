import React, { useState } from "react";

function getCities() {
  const cities = [];
  console.log(cities)
  let url = "https://sandersolutions.dk/sem3_backend/api/city/cities";
  fetch(url)
      .then(res => res.json())
      .then(data => {
          cities.push(data);
      });
      console.log(cities);
      return cities;
}

const FileForTesting = () => {
    const [teamName, setTeamName] = useState("");
    const data = getCities();

    const updateTeamName = (index) => {
      console.log("index", index);
      setTeamName(index);
    }

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
      <p>TESTING </p>
      <select onChange={handleChange} id="teamName">
        <option disabled selected value> - select a team - </option>
        {data.map(team => {
          return <option>{team.name}</option>;
        })};
        </select>
    </div >
  );
}

export default FileForTesting;
