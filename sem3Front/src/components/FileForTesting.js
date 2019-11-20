import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

const FileForTesting = () => {
  console.log("FileForTesting");
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    console.log("cities");
    let url = "https://sandersolutions.dk/sem3_backend/api/fb/teams";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCityList(data);
      })
      .catch(err => { throw err });
  }, []);


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
