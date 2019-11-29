import React, { useState, useEffect } from "react";
import URL from "../../settings.js";
import uuid from "uuid/v1";

//   import UserInfo from "./UserInfo";
function AllAboutTeam(props) {
  console.log("AllAboutTeam");
  const [players, setPlayers] = useState([]);
  console.log("AllAboutTeam - Players", players);

  useEffect(() => {
    console.log("AllAboutTeam - useEffect");

    console.log("AllAboutTeam - teams");
    if (
      typeof props.teamID.teamID !== "undefined" ||
      props.teamID.teamID != null
    ) {
      console.log(props.teamID.teamID)
      console.log("Hvis du er her, så er props.teamID.teamID IKKE undefined");
      let urlPlayers = URL + "/api/fb/teammembers/" + props.teamID.teamID;
      console.log("AllAboutTeam - useEffect - urlPlayers", urlPlayers);

      fetch(urlPlayers)
        .then(handleHttpErrors)
        .then(data => {
          console.log("AllAboutTeam - fetch - data", data);
          console.log(JSON.stringify(data));
          setPlayers(data);
        })
        .catch(console.log.bind(console));
    } else {
      console.log("Undefined or Null");
    }
  }, [props.teamID.teamID]);
  console.log("TeamID AllAboutTeam " + JSON.stringify(props.teamID.teamID));
  return (
    <div>
      <table className="Table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Name</th>
            <th>Role</th>
            <th>DOB.</th>
          </tr>
        </thead>
        <tbody>
          {players.map(element => (
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

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default AllAboutTeam;
