import React, { } from "react";
import AllAboutTeam from "./AllAboutTeam";
import FileForTesting from "./FileForTesting";
import NoMatch from "./NoMatch";

function News() {
  console.log("News");
  return (
    <div className="news">
      <FileForTesting />
      <AllAboutTeam />
      <NoMatch />
    </div>
  );
}

export default News;
