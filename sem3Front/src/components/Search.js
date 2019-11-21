import React, {
  useState, useEffect
} from "react";
import uuid from "uuid/v1";
import URL from "../settings";

const Search = ({ teamName, updateTeamName, crestURL, updateCrestURL, teamID, updateTeamID, teamDates, updateTeamDates, chosenTeam, facade }) => {
  console.log("Search");
  console.log("teamName", teamName);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    console.log("cities");
    let url = URL + "/api/fb/teams";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCityList(data);
      })
      .catch(err => { throw err });
  }, []);


  const updateTeamData = (teamID) => {

    console.log("updateTeamData");
    console.log("teamID", teamID);
    console.log("newURL", URL + "/api/fb/allmatches/" + teamID);
    fetch(URL + "/api/fb/allmatches/" + teamID)
      .then(res => res.json())
      .then(data => {
        console.log("data--------------------------------------------_>", data);
        updateTeamDates(data);
      })
      .catch(err => { throw err });
  }

  const handleChange = (evt) => {
    console.log("handleChange");
    console.log("cityList", cityList);
    const target = evt.target;
    const id = evt.target.id;
    console.log("target.value", target.value);
    const splitting = target.value.split(" - ");
    console.log("splitting", splitting);
    const c1 = splitting[1];
    const c2 = cityList[splitting[0]].crestUrl;
    const c3 = Number(splitting[2]);
    console.log("c1", c1);
    console.log("c2", c2);
    console.log("c3", c3);
    updateTeamID({ ...teamID, ["teamID"]: c3 });
    updateTeamName({ ...teamName, [id]: c1 });
    updateCrestURL({ ...crestURL, ["crestURL"]: c2 });
    updateTeamData(c3);
  }

  return (
    <div>
      {
        chosenTeam
          ?
          <select></select>
          :
          <select onChange={handleChange} id="teamName">
            <option> - select a team - </option>
            {cityList.map((team, index) => {
              return <option key={uuid()}>{index} - {team.name} - {team.teamID}</option>;
            })};
        </select>
      }
    </div >
  );
}

export default Search;
