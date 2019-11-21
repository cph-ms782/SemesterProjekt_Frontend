import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";
// import loginFacade from "./components/loginFacade";
import facade from "./components/ApiFacade";
import Team from "./components/Team";
import News from "./components/News";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import URL from "./settings";

function App() {
  console.log("App");

  const chosenTeam = localStorage.getItem("chosenTeam");
  const [teamName, setTeamName] = useState(chosenTeam ? chosenTeam : "");
  const [crestURL, setCrestURL] = useState("");
  const [teamID, setTeamID] = useState(0);
  const [teamMatches, setTeamMatches] = useState(["Bob"]);
  const [teamDates, setTeamDates] = useState(["Betina"]);

  useEffect(() => {
    console.log("useEffect");
    console.log("dates");
    fetch(URL + "/api/fb/allmatches/" + teamID)
      .then(res => res.json())
      .then(data => {
        setTeamMatches(data);
      })
      .catch(err => { throw err });
  }, []);


  const updateTeamName = (index) => {
    console.log("index", index);
    setTeamName(index);
  }
  const updateCrestURL = (index) => {
    console.log("index", index);
    setCrestURL(index);
  }
  const updateTeamID = (index) => {
    console.log("index", index);
    setTeamID(index);
  }

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
                teamName={teamName}
                updateTeamName={updateTeamName}
                crestURL={crestURL}
                updateCrestURL={updateCrestURL}
                teamID={teamID}
                updateTeamID={updateTeamID}
                facade={facade}
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
              <div id="userinfo"><UserInfo teamName={teamName} crestURL={crestURL} teamMatches={teamMatches} teamDates={teamDates}/></div>
            </div>
            <div id="cont-2">
              <div id="part-1">
                <div id="map">map</div>
                <div id="nextmatch">nextmatch</div>
                <div id="buy">buy</div>
              </div>
              <div id="news">
                <News />
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
        <li><NavLink exact activeClassName="active" to="/api">Api</NavLink></li>
      </ul>
    </div>
  )
}


export default App;
