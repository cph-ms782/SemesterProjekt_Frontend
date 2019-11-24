import React, { } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllAboutTeam from "./AllAboutTeam";
import NewsFileForTesting from "./NewsFileForTesting";
import NoMatch from "./NoMatch";
import NewsApi from "./NewsApi";
import NewsTeams from "./NewsTeams";
import NewsAirports from "./NewsAirports";
import NewsNodes from "./NewsNodes";

function News({ airports, teams }) {
  console.log("News");
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/api"><NewsApi /></Route>
          <Route exact path="/airports"><NewsAirports airports={airports} /></Route>
          <Route exact path="/teams"><NewsTeams teams={teams} /></Route>
          <Route exact path="/nodes"><NewsNodes /></Route>
          <Route exact path="/"><NewsFileForTesting teams={teams} /></Route>
          <Route exact path="/all"><AllAboutTeam /></Route>
          <Route ><NoMatch /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default News;
