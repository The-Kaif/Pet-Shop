import React, { useState } from "react";
import fakeServicesData from "../../data/fakeServiceData"; // Importing fake service data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import fallbackImg from "../../../assets/no_results_found.png"; // Importing a fallback image

function Services() {
  // State for storing the search term
  const [searchTerm, setSearchTerm] = useState("");
  const data = fakeServicesData; // Fake service data

  // Filter the data based on user input
  const filteredData = data.filter((service) => {
    const serviceName = service.name.toLowerCase();
    const serviceCategory = service.category.toLowerCase();
    const searchValue = searchTerm.toLowerCase();

    return (
      serviceName.includes(searchValue) || serviceCategory.includes(searchValue)
    );
  });

  return (
    <div>
      <h2 className="text-center">Our Services</h2>
      <hr />
      <center>
        <div className="search-container">
          {/* Input field for searching */}
          <input
            className="search-bar"
            type="text"
            placeholder="Search by service name, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Search icon */}
          <FontAwesomeIcon color="red" icon={faSearch} className="search-icon" />
        </div>
      </center>
      <div className="service-container">
        {/* Display service cards */}
        {filteredData.length > 0 ? (
          filteredData.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <div className="service-details">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-category">{service.category}</p>
              </div>
            </div>
          ))
        ) : (
          // Display fallback image when no results are found
          <div style={{ width: "40%", margin: "auto" }}>
            <img style={{ width: "100%" }} src={fallbackImg} alt="Fall back" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
