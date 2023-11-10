import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import './index.css'
// import StarRating from "./components/StarRating/StarRating.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color="#fcc419"
      size={48}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
