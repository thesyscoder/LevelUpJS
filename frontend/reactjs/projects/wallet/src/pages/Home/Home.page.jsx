// Home page

import React from "react";
import "./home.style.scss";

const HomePage = () => {
  console.log("This is home");
  return (
    <div className="home-container">
      <h1>This is home page</h1>
    </div>
  );
};

export default React.memo(HomePage);
