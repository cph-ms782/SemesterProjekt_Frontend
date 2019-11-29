import React, { useState, useEffect } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
// import loginFacade from "./components/loginFacade";
import URL from "./settings";
import dummyAir from "./dummyAir.js";
import TeamCrest from "./components/TeamCrest";
import News from "./components/News";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Leaderboard from "./components/Leaderboard";
import Buy from "./components/Buy";
import AllAboutTeam from "./components/news/AllAboutTeam";

function App({ apiFacade }) {
  console.log("App");
  const savedChosenTeam = localStorage.getItem("chosenTeam");
  const [chosenTeam, setChosenTeam] = useState(
    savedChosenTeam ? savedChosenTeam : ""
  );

  const [teamName, setTeamName] = useState(chosenTeam ? chosenTeam : "");

  const savedCrestURL = localStorage.getItem("chosenTeamCrestUrl");
  const [crestURL, setCrestURL] = useState(savedCrestURL ? savedCrestURL : "");
  const [teamID, setTeamID] = useState(0);
  const [teams, setTeams] = useState([]);
  const [airports, setAirports] = useState([]);
  const [flightDate, setFlightDate] = useState("");               //useState("12/02/2019");
  const [flightTime, setFlightTime] = useState("");               //useState("15:00");
  const [flightHomeCity, setFlightHomeCity] = useState("");       //useState("Norwich City FC");
  const [flightAwayCity, setFlightAwayCity] = useState("");       //useState("Arsenal FC");

  // const savedTeamMatches = localStorage.getItem("chosenTeamMatches");
  // const [teamMatches, setTeamMatches] = useState(savedTeamMatches ? savedTeamMatches : []);
  const [teamMatches, setTeamMatches] = useState([]);

  // const savedTeamDates = localStorage.getItem("chosenTeamDates");
  // const [teamDates, setTeamDates] = useState(savedTeamDates ? savedTeamDates : []);
  const [teamDates, setTeamDates] = useState([]);
  const [showBuyImage, setShowBuyImage] = useState(false);
  const [ticketURL, setTicketURL] = useState();
  const [teamPlayers, setTeamPlayers] = useState([]);

  console.log("teamMatches", teamMatches);
  console.log("teamDates", teamDates);
  console.log("dummyAir", dummyAir);
  console.log("teamPlayers" + teamPlayers);

  const updateTeamPlayers = index => {
    console.log("updateTeamPlayers - index", index);
    setTeamPlayers(index);
  };

  const updateTeamName = index => {
    console.log("updateTeamName - index", index);
    setTeamName(index);
  };
  const updateCrestURL = index => {
    console.log("updateCrestURL - index", index);
    setCrestURL(index);
  };
  const updateTeamID = index => {
    console.log("updateTeamID - index", index);
    setTeamID(index);
  };
  const updateTeamDates = index => {
    console.log("updateTeamDates - index", index);
    setTeamDates(index);
  };
  const updateTeamMatches = index => {
    console.log("updateTeamMatches - index", index);
    setTeamMatches(index);
  };
  const updateChosenTeam = index => {
    console.log("updateChosenTeam - index", index);
    setChosenTeam(index);
  };
  const updateFlightHomeCity = index => {
    console.log("updateFlightHomeCity - index", index);
    setFlightHomeCity(index);
  }
  const updateFlightAwayCity = (index) => {
    console.log("updateFlightAwayCity - index", index);
    setFlightAwayCity(index);
  }
  const updateFlightDate = (index) => {
    console.log("updateFlightDate - index", index);
    setFlightDate(index);
  };
  const updateFlightTime = index => {
    console.log("updateFlightTime - index", index);
    setFlightTime(index);
  }
  const updateShowBuyImage = (index) => {
    console.log("updateShowBuyImage - index", index);
    setShowBuyImage(index);
  }
  const updateTicketURL = (index) => {
    console.log("updateTicketURL - index", index);
    setTicketURL(index);
  }

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  useEffect(
    () => {
      console.log("useEffect");

      console.log("teams");
      let urlTeam = URL + "/api/fb/teams";
      console.log("App - useEffect - urlTeam", urlTeam);
      fetch(urlTeam)
        .then(handleHttpErrors)
        .then(data => {
          console.log("apiFacade - getDataAsync - data", data);
          setTeams(data.sort((a, b) => a.name.localeCompare(b.name)));
        })
        .catch(console.log.bind(console));

      console.log("airports");
      let urlAir = URL + "/api/air/airports";
      console.log("App - useEffect - urlAir", urlAir);
      fetch(urlAir).then(handleHttpErrors).then(data => {
        console.log("apiFacade - getDataAsync - data", data);
        setAirports(data.airports.sort((a, b) => a.localeCompare(b)));
      }).catch(console.log.bind(console));
    }, [], apiFacade);

  console.log("teamName", teamName);
  return (
    <div>
      <Router>
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
                <img alt="icon" src={require("./images/BDlogo_150px.png")} />
              </div>
              <div id="banner">Biggus Tickets</div>
            </div>
          </div>
          <div className="container">
            <div id="menubar">
              <MenuBar />
            </div>
          </div>
          <div className="container">
            <div id="newsticker">newsticker</div>
          </div>

          <div className="container">
            <div id="cont-1">
              <div id="team">
                <TeamCrest teamName={teamName} crestURL={crestURL} />
              </div>
              <div id="userinfo">
                <UserInfo
                  teamName={teamName}
                  crestURL={crestURL}
                  teamMatches={teamMatches}
                  teamDates={teamDates}
                  chosenTeam={chosenTeam}
                  updateChosenTeam={updateChosenTeam}
                  flightDate={flightDate}
                  updateFlightDate={updateFlightDate}
                  flightTime={flightTime}
                  updateFlightTime={updateFlightTime}
                  updateFlightHomeCity={updateFlightHomeCity}
                  updateFlightAwayCity={updateFlightAwayCity}
                /></div>
            </div>
            <div id="cont-2">
              <div id="part-1">
                <div id="map">map</div>
                <div id="nextmatch">nextmatch</div>
                <div id="buy"><Buy showBuyImage={showBuyImage} ticketURL={ticketURL} /></div>
              </div>
              <div id="news">
                <News
                  airports={airports}
                  teams={teams}
                  flightHomeCity={flightHomeCity}
                  flightAwayCity={flightAwayCity}
                  flightTime={flightTime}
                  flightDate={flightDate}
                  updateTicketURL={updateTicketURL}
                  updateShowBuyImage={updateShowBuyImage}
                  dummyAir={dummyAir}
                />
              </div>
            </div>
            <div id="cont-3">
              <div id="leaderboard">
                <Leaderboard teams={teams} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

function MenuBar() {
  console.log("MenuBar");
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/teams">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/airports">
            Airports
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/nodes">
            React
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/api">
            API
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/flights">
            Flights
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default App;
