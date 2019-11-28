import React, { useState, useEffect } from "react";
import URL from "../settings";
import uuid from "uuid/v1";

function Buy(props) {
  console.log("Buy");
  const [buyImage, setBuyImage] = useState(false);
  // const buyButton = '../images/buy.png';
  const buyButtonGreyed = '../images/buy_background.png';
 // console.log("image-----------------------------", image);
  return (
    <div>
      {/* <img
        {src = buyImage ? { require("../images/buy.png") } : { require("../images/buy_background.png") }}
        style={{ 'maxHeight': '100' }}
        alt="buybutton" /> */}
    </div>
  )
}


export default Buy;
