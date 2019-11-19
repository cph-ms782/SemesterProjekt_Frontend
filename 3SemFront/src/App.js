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


  const updateTeamName = (index) => {
    console.log("index", index);
    setTeamName(index);
  }

  console.log("teamName", teamName);
  return (
    <div>
      <Router >
        <div>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/allaboutteam"><AllAboutTeam /></Route>
            <Route component={NoMatch} />
          </Switch>
          <Search
            teamName={teamName}
            updateTeamName={updateTeamName}
          />
          <Team />
          <UserInfo teamName={teamName} />
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
