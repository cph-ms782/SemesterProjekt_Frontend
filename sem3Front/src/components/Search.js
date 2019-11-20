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
      })
      .catch(err => { throw err });
  }, []);

  const handleChange = (evt) => {
    console.log("handleChange");
    console.log("cityList", cityList);
    const target = evt.target;
    const id = evt.target.id;
    console.log("target.value", target.value);
    const c1 = target.value.split(" - ")[1];
    const c2 = cityList[target.value.split(" - ")[0]].crestUrl;
    console.log("c1", c1);
    console.log("c2", c2);
    updateTeamName({ ...teamName, [id]: c1 });
    updateCrestURL({ ...crestURL, ["crestURL"]: c2 });
  }

  return (
    <div>
      <select onChange={handleChange} id="teamName">
        <option> - select a team - </option>
        {cityList.map((team, index) => {
          return <option key={uuid()}>{index} - {team.name}</option>;
        })};
        </select>
    </div >
  );
}

export default Search;
