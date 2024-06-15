import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLiist from "./components/NoteLiist";

function App() {
  const [notes,setNotes] = useState([]);
  const handleAddNote =(newNote)=>{
   setNotes((prevNotes)=>[...prevNotes,newNote]);
  };
  
  return(
    <div className="container">
    <div className="note-header">note-header</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleAddNote}/>
      <div className="note-container">
        <NoteLiist notes={notes}/>
      </div>
    </div>
  </div>
  ) 
}

export default App;
