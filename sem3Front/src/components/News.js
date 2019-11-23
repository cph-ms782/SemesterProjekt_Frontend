import React, { } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllAboutTeam from "./AllAboutTeam";
import FileForTesting from "./FileForTesting";
import NoMatch from "./NoMatch";
import NewsApi from "./NewsApi";
import NewsTeams from "./NewsTeams";
import NewsAirports from "./NewsAirports";

function News() {
  console.log("News");
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/api"><NewsApi /></Route>
          <Route exact path="/airports"><NewsAirports /></Route>
          <Route exact path="/teams"><NewsTeams /></Route>
          <Route exact path="/"><FileForTesting /></Route>
          <Route exact path="/all"><AllAboutTeam /></Route>
          <Route ><NoMatch /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default News;
