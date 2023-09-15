import React, { useState } from "react";
import Table from "./Table";
import fakePetData from "../../../data/fakePetData";
import fakeServicesData from "../../../data/fakeServiceData";

function Tabs() {
  // Define a state variable to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Pets");

  // Function to switch between tabs
  const openDashboard = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="tabs-conatiner">
      {/* Custom tab bar */}
      <div className="custom-tabs-bar">
        {/* Button for the "Pets" tab */}
        <button
          className={`custom-tabs-button ${
            activeTab === "Pets" ? "active" : ""
          }`}
          onClick={() => openDashboard("Pets")}
        >
          Pets
        </button>
        {/* Button for the "Services" tab */}
        <button
          className={`custom-tabs-button ${
            activeTab === "Services" ? "active" : ""
          }`}
          onClick={() => openDashboard("Services")}
        >
          Services
        </button>
      </div>

      {/* Content for the "Pets" tab */}
      <div
        id="Pets"
        className={`custom-tabs-content ${activeTab === "Pets" ? "show" : ""}`}
      >
        {/* Render the Table component with fakePetData */}
        <Table data={fakePetData} />
      </div>

      {/* Content for the "Services" tab */}
      <div
        id="Services"
        className={`custom-tabs-content ${
          activeTab === "Services" ? "show" : ""
        }`}
      >
        {/* Render the Table component with fakeServicesData */}
        <Table data={fakeServicesData} />
      </div>
    </div>
  );
}

export default Tabs;
