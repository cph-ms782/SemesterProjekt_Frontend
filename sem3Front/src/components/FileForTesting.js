import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

function getCities() {

}

const FileForTesting = () => {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    console.log("cities");
    let url = "https://sandersolutions.dk/sem3_backend/api/fb/teams";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCityList(data);
        console.log("cityList", cityList);
      })
      .catch(err => { throw err });
  }, []);

  console.log("FileForTesting");
  // const [teamName, setTeamName] = useState("");

  // const updateTeamName = (index) => {
  //   console.log("index", index);
  //   setTeamName(index);
  // }

  // const handleChange = (evt) => {
  //   console.log("handleChange");
  //   const target = evt.target;
  //   const id = evt.target.id;
  //   console.log("target.value", target.value);
  //   updateTeamName({ ...teamName, [id]: target.value });
  //   console.log("teamName", teamName);
  // }

  return (
    <div>
      <p>TESTING </p>
      <select>
        <option disabled value> - select a team - </option>
        {cityList.map((data) => (
          <option key={uuid()}>{data.name}</option>
        ))}
      </select>
    </div >
  );
}

export default FileForTesting;
