import React, { } from "react";

const NewsFileForTesting = ({ isLoaded, teams }) => {
  console.log("NewsFileForTesting");
  console.log("NewsFileForTesting isLoaded", isLoaded);
  return (
    <div>
      <p>TESTING </p>
      {/* {isLoaded && <NewsFileForTestingRender teams={teams} />} */}
    </div >
  );
}
export default NewsFileForTesting;
