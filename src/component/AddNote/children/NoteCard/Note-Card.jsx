import React from "react";
import "./Note-Card.css";

const NoteCard = ({ id, category, content, date, title }) => {
  return (
    <div className="note-card-container">
      <div className="card-header">
        <p>{category}</p>
        <p>{date}</p>
      </div>
      <h3>{title}</h3>
      <p>{content.substring(1, 140) + " ..."}</p>
    </div>
  );
};

export default NoteCard;
