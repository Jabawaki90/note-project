import { useState, useEffect } from "react";
import axios from "axios";
import UserDetailContainer from "./component/UserDetail/User-Detail-Container";
import AddNoteContainer from "./component/AddNote/Add-Note-Container";
import NoteFormContainer from "./component/NoteForm/Note-Form-Container";

import "./App.css";

function App() {
  const [home, setHome] = useState("");

  const getDatas = async () => {
    const response = await axios.get("http://localhost:3001/getData");
    setHome(response.data);
  };

  useEffect(() => {
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setHome(data.json());
    //     console.log(data);
    //   });
    getDatas();
  }, []);
  return (
    <div className="main-container">
      <p>{home}</p>
      <UserDetailContainer />
      <AddNoteContainer />
      <NoteFormContainer />
    </div>
  );
}

export default App;
