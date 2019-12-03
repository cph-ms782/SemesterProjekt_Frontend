import React, { useState, useEffect } from "react";
import URL from "../../settings.js";
import uuid from "uuid/v1";

//   import UserInfo from "./UserInfo";
function AllAboutTeam(props) {
  console.log("AllAboutTeam");
  let imageUrl = "";
  const [players, setPlayers] = useState([]);
  console.log("AllAboutTeam - Players", players);

  useEffect(() => {
    console.log("AllAboutTeam - useEffect");

    console.log("AllAboutTeam - teams");
    {
      console.log(props.teamID.teamID);
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
    }
  }, [props.teamID.teamID]);
  console.log("TeamID AllAboutTeam " + JSON.stringify(props.teamID.teamID));
  if (props.teamID.teamID == null) {
    return (
      <div>
        <p></p>
      </div>
    );
  } else {
    return (
      <div>
        <table className="Table">
          <thead>
            <tr>
              <th></th>
              <th>Position</th>
              <th>Name</th>
              <th>Date of birth </th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {players.map(element => (
              <tr key={uuid()}>
                <td>{element.position === "Goalkeeper" && <img src={require("../../images/goalkeeper.png")} className="thumbnailFootball"></img>}
                  {element.position === "Defender" && <img src={require("../../images/defender.png")} className="thumbnailFootball"></img>}
                  {element.position === "Midfielder" && <img src={require("../../images/midtfielder.jpg")} className="thumbnailFootball"></img>}
                  {element.position === "Attacker" && <img src={require("../../images/attacker.png")} className="thumbnailFootball"></img>}
                  {element.role === "COACH" && <img src={require("../../images/coach.png")} className="thumbnailFootball"></img>}
                </td>
                <td>{element.role === "COACH" ? "Coach" : element.position}</td>
                <td>{element.name}</td>
                <td>{element.dateOfBirth}</td>
                <td>{element.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default AllAboutTeam;
