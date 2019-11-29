import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import URL from "../../settings.js";
import uuid from "uuid/v1";
//   import UserInfo from "./UserInfo";
function AllAboutTeam(props) {
  console.log("AllAboutTeam");
  console.log("props.players", props.players);
  const [players, setPlayers] = useState([]);
  console.log("AllAboutTeam - Players", players);

  useEffect(() => {
    console.log("useEffect");

    console.log("teams");
    let urlPlayers = URL + "/api/fb/teammembers/57";
    console.log("AllAboutTeam - useEffect - urlPlayers", urlPlayers);

    fetch(urlPlayers)
      .then(handleHttpErrors)
      .then(data => {
        console.log("AllAboutTeam - fetch - data", data);
        setPlayers(data);
      })
      .catch(console.log.bind(console));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {players.map((element) => (
            <tr key={uuid()}>
              <td>{element.position}</td>
              <td>{element.name}</td>
              <td>{element.role}</td>
              <td>{element.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
  const handleChange = evt => {
    console.log("handleChange");
    console.log("teams", teams);
    const target = evt.target;
    const id = evt.target.id;
    console.log("target.value", target.value);
    const splitting = target.value.split(" - ");
    console.log("splitting", splitting);
    const c1 = splitting[1];
    const c2 = teams[splitting[0]].crestUrl;
    const c3 = Number(splitting[2]);
    console.log("c1", c1);
    console.log("c2", c2);
    console.log("c3", c3);
    updateTeamID({ ...teamID, ["teamID"]: c3 });
    updateTeamName({ ...teamName, [id]: c1 });
    updateCrestURL({ ...crestURL, ["crestURL"]: c2 });
    updateTeamData(c3);
  };
*/
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default AllAboutTeam;
