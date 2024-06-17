import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLiist from "./components/NoteLiist";

function App() {
  const [notes,setNotes] = useState([]);

  const handleAddNote =(newNote)=>{
   setNotes((prevNotes)=>[...prevNotes,newNote]);
  }

  const handleOnDeleted = (id) => {
    setNotes(prevNotes=>prevNotes.filter(n=>n.id !== id))
  }

  const handleOnCompleted = (e) =>{
    const noteId = Number(e.target.value)
    setNotes((prevNotes)=>prevNotes.map((note)=>note.id === noteId ? {...note, completed :!note.completed}:note))
  }
  
  return(
    <div className="container">
    <div className="note-header">Todo List</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleAddNote}/>
      <div className="note-container">
        <NoteLiist notes={notes} onDeleted={handleOnDeleted} 
        onCompleted={handleOnCompleted}/>
      </div>
    </div>
  </div>
  ) 
}

export default App;
