import React, { } from "react";
import uuid from "uuid/v1";

function Leaderboard(props) {
  console.log("Leaderboard");
  console.log("props.teams", props.teams);
  console.log("props.standing", props.standings);
  console.log("props.teams.length", props.teams.length);

  if (props.teams.length == 0) {
    return (
      <p>Server pending</p>
    )
  } else {
    let board = props.standings.map(standing => {
      const teamWithSameID = props.teams.find(team => {
        return team.teamID == standing.teamID;
      });
      standing.tla = teamWithSameID.tla;
      return standing;
    });
    console.log("board", board);
    return (
      <div style={{ textAlign: "center" }}>
        <table className="table">
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
              <tr key={uuid()} style={{ 'color': ((index === 0 && "blue") || (index > 16 && "red")) }}>
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
        </table >
      </div >
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
