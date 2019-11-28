import React, { useState, useEffect } from "react";
import URL from "../settings";
import uuid from "uuid/v1";

function Buy({ showBuyImage }) {
  console.log("Buy");
  console.log("showBuyImage", showBuyImage);

  return (
    <div>
      <img
        src={showBuyImage ? require("../images/buy.png") : require("../images/buy_background.png")}
        style={{ 'maxHeight': '100%' }}
        alt="buybutton" />
    </div>
  )
}


export default Buy;
