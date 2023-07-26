import { useState, useEffect } from "react";
import axios from "axios";
import UserDetailContainer from "./component/UserDetail/User-Detail-Container";
import AddNoteContainer from "./component/AddNote/Add-Note-Container";
import NoteFormContainer from "./component/NoteForm/Note-Form-Container";

import "./App.css";

function App() {
  const [noteList, setNotesList] = useState([]);

  const getDatas = async () => {
    const response = await axios.get("http://localhost:3001/api/v1/notes");
    const data = await response.data;
    console.log("data", data);
    setNotesList(data);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="main-container">
      <UserDetailContainer note={noteList} />
      <AddNoteContainer note={noteList} />
      <NoteFormContainer note={noteList} />
    </div>
  );
}

export default App;
