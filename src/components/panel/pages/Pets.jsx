import React, { useState } from "react";
import fallbackImg from "../../../assets/no_results_found.png"; // Importing a fallback image
import fakePetData from "../../data/fakePetData"; // Importing fake pet data
import PetCard from "./PetCard"; // Importing the PetCard component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Pets() {
  // State for storing the search term
  const [searchTerm, setSearchTerm] = useState("");
  const data = fakePetData; // Fake pet data

  // Filter the data based on user input
  const filteredData = data.filter((pet) => {
    const petName = pet.name.toLowerCase();
    const petType = pet.type.toLowerCase();
    const ownerName = pet.owner.name.toLowerCase();
    const searchValue = searchTerm.toLowerCase();

    return (
      petName.includes(searchValue) ||
      petType.includes(searchValue) ||
      ownerName.includes(searchValue)
    );
  });

  return (
    <div>
      <h2 className="text-center">Meet Our Pets</h2>
      <hr></hr>
      <center>
        <div className="search-container">
          {/* Input field for searching */}
          <input
            className="search-bar"
            type="text"
            placeholder="Search by pet name, type, or owner..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Search icon */}
          <FontAwesomeIcon color="red" icon={faSearch} className="search-icon" />
        </div>
      </center>
      <div className="pet-grid">
        {/* Display pet cards */}
        {filteredData.length > 0 ? (
          filteredData.map((pet) => <PetCard key={pet.id} pet={pet} />)
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

export default Pets;
