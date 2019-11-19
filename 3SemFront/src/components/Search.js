import React, { useState } from "react";

function Search(props) {
  console.log("Search");
  const {teamName: [teamName, setTeamName]} = {teamName: useState(0),...(props.teamName || {})};
      
  const [name, setName] = useState("");

  const handleChange = (evt) => {
    console.log("handleChange");
    const target = evt.target;
    const id = evt.target.id;
    console.log("target.value", target.value);
    setTeamName({ ...teamName, [id]: target.value });
    console.log("teamName", teamName);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const name = evt.target.teamName;
    console.log("submit");
      setTeamName(teamName);
  }
  return (
    <div>
        <form>
          <p>Searching </p>
              <input
                type="text"
                id="teamname"
                placeholder="Title"
                onChange={handleChange}
              />
              <button
                onClick={handleSubmit}
              >
                Submit
            </button>
          </form>
    </div>
  );
}

export default Search;
