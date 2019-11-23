import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";
// import loginFacade from "./components/loginFacade";
// import facade from "./components/apiFacade";
import URL from "./settings";
import Team from "./components/Team";
import News from "./components/News";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  console.log("App");
  const savedChosenTeam = localStorage.getItem("chosenTeam");
  const [chosenTeam, setChosenTeam] = useState(savedChosenTeam ? savedChosenTeam : "");
  const [teamName, setTeamName] = useState(chosenTeam ? chosenTeam : "");
  const [crestURL, setCrestURL] = useState("");
  const [teamID, setTeamID] = useState(0);
  const [teams, setteams] = useState([]);
  const [airports, setAirports] = useState([]);
  const [teamMatches, setTeamMatches] = useState([]);
  const [teamDates, setTeamDates] = useState([]);
  console.log("teamMatches", teamMatches);
  console.log("teamDates", teamDates);

  const updateTeamName = (index) => {
    console.log("updateTeamName - index", index);
    setTeamName(index);
  }
  const updateCrestURL = (index) => {
    console.log("updateCrestURL - index", index);
    setCrestURL(index);
  }
  const updateTeamID = (index) => {
    console.log("updateTeamID - index", index);
    setTeamID(index);
  }
  const updateTeamDates = (index) => {
    console.log("updateTeamDates - index", index);
    setTeamDates(index);
  }
  const updateTeamMatches = (index) => {
    console.log("updateTeamMatches - index", index);
    setTeamMatches(index);
  }
  const updateChosenTeam = (index) => {
    console.log("updateChosenTeam - index", index);
    setChosenTeam(index);
  }

  useEffect(() => {
    console.log("useEffect");

    console.log("teams");
    let urlTeam = URL + "/api/fb/teams";
    console.log("App - useEffect - urlTeam", urlTeam);
    fetch(urlTeam)
      .then(res => res.json())
      .then(data => {
        console.log("inside fetch ---teams-- data", data);
        setteams(data.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch(err => { throw err });

    console.log("airports");
    let urlAir = URL + "/api/air/airports";
    console.log("App - useEffect - urlAir", urlAir);
    fetch(urlAir)
      .then(res => res.json())
      .then(data => {
        console.log("inside fetch --airports--- data", data);
        setAirports(data.airports);
      })
      .catch(err => { throw err });

  }, []);

  console.log("teamName", teamName);
  return (
    <div>
      <Router >
        <div>

          <div className="container">
            <button type="button" name="daynight" id="daynight">
              <i className="fa fa-sun-o" aria-hidden="true" id="sun"></i>
              <i className="fa fa-moon-o" aria-hidden="true" id="moon"></i>
            </button>
            <div id="top-content">
              <Search
                URL={URL}
                teamName={teamName}
                updateTeamName={updateTeamName}
                crestURL={crestURL}
                updateCrestURL={updateCrestURL}
                teamID={teamID}
                teams={teams}
                updateTeamID={updateTeamID}
                updateTeamDates={updateTeamDates}
                updateTeamMatches={updateTeamMatches}
                chosenTeam={chosenTeam}
              />
            </div>
          </div>

          <div className="container">
            <div id="header">
              <div id="logo">
                <img
                  alt="icon"
                  src={require('./images/BDlogo_150px.png')}
                />
              </div>
              <div id="banner">Biggus Tickets</div>
            </div>
          </div>
          <div className="container">
            <div id="menubar"><Header /></div>
          </div>
          <div className="container">
            <div id="newsticker">newsticker</div>
          </div>

          <div className="container">
            <div id="cont-1">
              <div id="team"><Team teamName={teamName} crestURL={crestURL} /></div>
              <div id="userinfo">
                <UserInfo
                  teamName={teamName}
                  crestURL={crestURL}
                  teamMatches={teamMatches}
                  teamDates={teamDates}
                  chosenTeam={chosenTeam}
                  updateChosenTeam={updateChosenTeam}
                /></div>
            </div>
            <div id="cont-2">
              <div id="part-1">
                <div id="map">map</div>
                <div id="nextmatch">nextmatch</div>
                <div id="buy">buy</div>
              </div>
              <div id="news">
                <News
                  teams={teams}
                  airports={airports}
                />
              </div>
            </div>
            <div id="cont-3">
              <div id="leaderboard">leaderboard</div>
            </div>
          </div>

        </div>

      </Router>

    </div>


  );
}

function Header() {
  console.log("Header");
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/teams">Teams</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/airports">Airports</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/api">API</NavLink></li>
      </ul>
    </div>
  )
}


export default App;
