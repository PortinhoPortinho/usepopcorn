import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
// import App-v1 from "./App-v1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "great", "amazing"]}
    /> */}
    <StarRating size={24} color="red" defaultRating={3} />
  </React.StrictMode>,
);
