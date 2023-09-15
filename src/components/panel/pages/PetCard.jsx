import React from "react";

// Functional component for displaying a pet card
const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      {/* Pet image */}
      <img src={pet.image} alt={pet.name} className="pet-image" />

      <div className="pet-container">
        {/* Pet name */}
        <h2 className="pet-name">{pet.name}</h2>
        <hr></hr>

        {/* Pet information */}
        <p className="pet-info">
          <strong>Type:</strong> {pet.type}
        </p>
        <p className="pet-info">
          <strong>Age:</strong> {pet.age} years
        </p>
        <p className="pet-info">
          <strong>Breed:</strong> {pet.breed}
        </p>

        {/* Owner information */}
        <p className="pet-info">
          <strong>Owner:</strong> {pet.owner.name}
        </p>
        <p className="pet-info">
          <strong>Email:</strong> {pet.owner.email}
        </p>
      </div>
    </div>
  );
};

export default PetCard;
