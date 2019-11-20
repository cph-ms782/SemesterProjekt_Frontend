import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
// import loginFacade from "./components/loginFacade";
import facade from "./components/ApiFacade";
import Team from "./components/Team";
import News from "./components/News";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Api from "./components/Api";

function App() {
  console.log("App");
  const [teamName, setTeamName] = useState("");
  const [crestURL, setCrestURL] = useState("");

  const updateTeamName = (index) => {
    console.log("index", index);
    setTeamName(index);
  }
  const updateCrestURL = (index) => {
    console.log("index", index);
    setCrestURL(index);
  }

  console.log("teamName", teamName);
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/api"><Api /></Route>
        </Switch>
        <div>

          <div className="container">
            <button type="button" name="daynight" id="daynight">
              <i className="fa fa-sun-o" aria-hidden="true" id="sun"></i>
              <i className="fa fa-moon-o" aria-hidden="true" id="moon"></i>
            </button>
            <div id="top-content">
              {/* <form action="#"> */}
              <Search
                teamName={teamName}
                updateTeamName={updateTeamName}
                crestURL={crestURL}
                updateCrestURL={updateCrestURL}
                facade={facade}
              />
              {/* <button type="submit"><i class="fa fa-search"></i></button>
                <input type="text" placeholder="Search.." name="search" /> */}
              {/* </form> */}
            </div>
          </div>

          <div className="container">
            <div id="header">
              <div id="logo">logo</div>
              <div id="banner">banner</div>
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
              <div id="userinfo"><UserInfo teamName={teamName} /></div>
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
