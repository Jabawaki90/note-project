import React from "react";
import NoteCard from "./children/NoteCard/Note-Card";
import "./Add-Note-Container.css";

const AddNoteContainer = () => {
  return (
    <div className="add-note-container">
      <div className="add-note-form-detail-container">
        <div className="add-note-title">Travel // dynamic</div>
        <div className="add-note-label-container">
          <p>9 notes</p>
          <span>icon</span>
        </div>
        <input type="text" />
        <button>+ add note</button>
      </div>
      <div className="scroll">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default AddNoteContainer;
