import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

const NewsFileForTesting = ({ teams }) => {
  console.log("NewsFileForTesting");

  return (
    <div>
      <p>TESTING </p>
      <select>
        <option disabled value> - select a team - </option>
        {teams.map((team) => (
          <option key={uuid()}>{team.name}</option>
        ))}
      </select>
    </div >
  );
}

export default NewsFileForTesting;
