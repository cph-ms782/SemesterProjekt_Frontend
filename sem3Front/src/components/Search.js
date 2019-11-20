import React, {
  useState, useEffect
} from "react";
import uuid from "uuid/v1";

const Search = ({ teamName, updateTeamName, crestURL, updateCrestURL, facade }) => {
  console.log("Search");
  console.log("teamName", teamName);
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
        <option disabled value> - select a team - </option>
        {cityList.map(team => {
          return <option key={uuid()}>{team.name}</option>;
        })};
        </select>
    </div >
  );
}

export default Search;
