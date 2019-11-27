import React, { useState, useEffect } from "react";
import URL from "../settings";
import uuid from "uuid/v1";

function Leaderboard(props) {
  console.log("Leaderboard");
  console.log("props.teams", props.teams);
  const [standings, setStandings] = useState([]);
  console.log("Leaderboard - standings", standings);

  useEffect(() => {
    console.log("useEffect");

    console.log("teams");
    let urlStandings = URL + "/api/fb/standings";
    console.log("Leaderboard - useEffect - urlStandings", urlStandings);

    fetch(urlStandings)
      .then(handleHttpErrors)
      .then(data => {
        console.log("Leaderboard - fetch - data", data);
        setStandings(data);
      })
      .catch(console.log.bind(console));
  }, []);

  console.log("standings", standings);
  console.log("props.teams", props.teams);
  console.log("props.teams.length", props.teams.length);

  if (props.teams.length == 0) {
    return (
    <p>Server pending</p>
    )
  } else {
    let board = standings.map(standing => {
      console.log("standing.teamID", standing.teamID);
      const teamWithSameID = props.teams.find(team => {
        console.log("team.tla", team.tla);
        console.log("team.teamID", team.teamID);
        return team.teamID == standing.teamID;
      });
      console.log("teamWithSameID.tla", teamWithSameID);
      standing.tla = teamWithSameID.tla;
      console.log("standing", standing);
      return standing;
    });
    console.log("board", board);
    return (
      <table className="table">
        <div>
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Team</th>
              <th>GP</th>
              <th>W</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            {board.map((element, index) => (
              <tr key={uuid()}>
                <td>{element.position}</td>
                <td>{element.tla}</td>
                <td>{element.playedGames}</td>
                <td>{element.won}</td>
                <td>{element.lost}</td>
                <td>{element.goalsFor}</td>
                <td>{element.goalsAgainst}</td>
                <td>{element.goalDifference}</td>
                <td>{element.points}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    );
  }
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default Leaderboard;
