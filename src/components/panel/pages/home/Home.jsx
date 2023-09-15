import React from "react";
import Carousel from "./Carousel";
import "./Home.css";
import Category from "./Category";
import Tabs from "./Tabs";

function Home() {
  return (
    <div>
      {/* Render the Carousel component */}
      <Carousel />
      {/* Dashboard Container */}
      <div className="dashboard-container">
        {/* Dashboard Title */}
        <h1 className="dashboard-title">
          E-Pets <span style={{ color: "gray" }}>Dashboard</span>
        </h1>
        {/* Render the Tabs component */}
        <Tabs />
      </div>
      {/* Render the Category component */}
      <Category />
    </div>
  );
}

export default Home;
