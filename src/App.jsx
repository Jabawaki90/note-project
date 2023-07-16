import { useState } from "react";
import UserDetailContainer from "./component/UserDetail/User-Detail-Container";
import AddNoteContainer from "./component/AddNote/Add-Note-Container";
import NoteFormContainer from "./component/NoteForm/Note-Form-Container";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <UserDetailContainer />
      <AddNoteContainer />
      <NoteFormContainer />
    </div>
  );
}

export default App;
