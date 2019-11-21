import React, { } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllAboutTeam from "./AllAboutTeam";
import FileForTesting from "./FileForTesting";
import NoMatch from "./NoMatch";
import Api from "./Api";

function News() {
  console.log("News");
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/api"><Api /></Route>
          <Route exact path="/"><FileForTesting /></Route>
          <Route exact path="/all"><AllAboutTeam /></Route>
          <Route ><NoMatch /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default News;
