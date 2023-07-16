import React from "react";
import "./Note-Card.css";

const NoteCard = () => {
  return (
    <div className="note-card-container">
      <div className="card-header">
        <p>TRAVEL</p>
        <p>11/12/2023</p>
      </div>
      <h3>Trip to the capital</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        commodo lectus. Sed eu massa ullamcorper, congue diam non
      </p>
    </div>
  );
};

export default NoteCard;
