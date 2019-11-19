import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import facade from "./components/loginFacade";
import Home from "./components/Home";
import Team from "./components/Team";
import AllAboutTeam from "./components/AllAboutTeam";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  console.log("App");
  const [teamName, setTeamName] = useState("");

  return (
    <div>
      <Router >
        <div>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/team"><Team /></Route>
            <Route path="/allaboutteam"><AllAboutTeam /></Route>
            <Route path="/search" ><Search teamName={{ teamName: [teamName, setTeamName] }} /></Route>
            <Route path="/userinfo"><UserInfo /></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      <p>teamnumber </p>
      <p>{teamName}</p>
    </div>
  );
}

function Header() {
  console.log("Header");
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/team">Team</NavLink></li>
        <li><NavLink activeClassName="active" to="/search">Search</NavLink></li>
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
