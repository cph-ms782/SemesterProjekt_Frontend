import React, { } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllAboutTeam from "./news/AllAboutTeam";
import NewsFileForTesting from "./news/NewsFileForTesting";
import NoMatch from "./news/NoMatch";
import NewsApi from "./news/NewsApi";
import NewsTeams from "./news/NewsTeams";
import NewsAirports from "./news/NewsAirports";
import NewsNodes from "./news/NewsNodes";
import NewsFlights from "./news/NewsFlights";

function News({ airports, teams, flightHomeCity, flightAwayCity, teamMatches,teamDates, flightTime, flightDate, updateTicketURL, updateShowBuyImage, dummyAir, updateTeamPlayers, teamID }) {
  console.log("News");
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/api"><NewsApi /></Route>
          <Route exact path="/airports"><NewsAirports airports={airports} /></Route>
          <Route exact path="/teams"><NewsTeams teams={teams} /></Route>
          <Route exact path="/nodes"><NewsNodes /></Route>
          <Route exact path="/flights"><NewsFlights
          teamDates={teamDates} 
          teamMatches={teamMatches} 
          flightAwayCity={flightAwayCity} 
            teams={teams}
            airports={airports}
            flightHomeCity={flightHomeCity}
            flightTime={flightTime}
            flightDate={flightDate}
            updateTicketURL={updateTicketURL}
            updateShowBuyImage={updateShowBuyImage}
            dummyAir={dummyAir}
          /></Route>
          <Route exact path="/all"><AllAboutTeam updateTeamPlayers={updateTeamPlayers} teamID={teamID}/></Route>
          <Route exact path="/"><NewsFileForTesting teams={teams} /></Route>
          <Route ><NoMatch /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default News;
