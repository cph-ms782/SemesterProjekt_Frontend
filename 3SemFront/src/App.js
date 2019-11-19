import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import facade from "./components/loginFacade";
// import LogIn from "./components/LogIn";
// import Data from "./components/Data";
import Home from "./components/Home";
import Team from "./components/Team";
import AllAboutTeam from "./components/AllAboutTeam";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  console.log("App");
 /* const token = localStorage.getItem("jwtToken");
 const [loggedIn, setLoggedIn] = useState(token ? true : false);

  const logout = () => {
    console.log("App - logout");
    facade.logout();
    setLoggedIn(false);
    console.log("loggedIn", loggedIn);
  };
  const login = (user, pass) => {
    console.log("App - login");
    facade.login(user, pass).then(res => setLoggedIn(true));
    console.log("loggedIn", loggedIn);
  }; */
  return (
    <div>
      <Router >
        <div>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/team"><Team /></Route>
            <Route path="/allaboutteam"><AllAboutTeam /></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/userinfo"><UserInfo /></Route>
            <Route component={NoMatch} />
          </Switch>
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
