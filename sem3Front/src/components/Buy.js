import React, { useState, useEffect } from "react";
import URL from "../settings";
import uuid from "uuid/v1";

function Buy({ showBuyImage, ticketURL }) {
  console.log("Buy");
  console.log("Buy showBuyImage", showBuyImage);
  console.log("Buy ticketURL", ticketURL);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={showBuyImage ? require("../images/buy.png") : require("../images/buy_background.png")}
        style={{ 'width': "65%" }}
        alt="buybutton" />
    </div>
  )
}


export default Buy;
