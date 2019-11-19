import React, { } from "react";

const Search = ({ teamName, updateTeamName }) => {
  console.log("Search");
  console.log("teamName", teamName);

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
      <form>
        <p>Searching </p>
        <input
          type="text"
          id="teamName"
          placeholder="Title"
          onChange={handleChange}
        />
      </form>
    </div >
  );
}

export default Search;
