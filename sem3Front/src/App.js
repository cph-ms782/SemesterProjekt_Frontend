import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
// import loginFacade from "./components/loginFacade";
import facade from "./components/ApiFacade";
import Home from "./components/Home";
import Team from "./components/Team";
import AllAboutTeam from "./components/AllAboutTeam";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Api from "./components/Api";
import FileForTesting from "./components/FileForTesting";

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
        <div>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/api"><Api /></Route>
          </Switch>
          <FileForTesting />
          <AllAboutTeam />
          <Search
            teamName={teamName}
            updateTeamName={updateTeamName}
            crestURL={crestURL}
            updateCrestURL={updateCrestURL}
            facade={facade}
          />
          <Team teamName={teamName} crestURL={crestURL} />
          <UserInfo teamName={teamName} />
          <Route component={NoMatch} />
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

function NoMatch() {
  console.log("NoMatch");
  return (
    <div>
      Hello NoMatch
    </div>
  )
}

export default App;
