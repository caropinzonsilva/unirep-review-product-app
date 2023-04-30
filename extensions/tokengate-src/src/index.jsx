import ReactDOM from "react-dom";
import React from "react";

import { App } from "./App";

// The element id is defined in app-block.liquid
const container = document.getElementById("tokengating-example-app");

ReactDOM.createRoot(container).render(
  <App gated={container.dataset.product_gated === "true"} />
);

console.log("Setting window listener");
window.onmessage = function (e) {
  if (e.data == "hello") {
    document.getElementById("one-click-gifted-nft").style.display = "initial";
    document.getElementById("one-click-gifted-nft-info").style.display = "none";
  }
};
