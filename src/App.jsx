import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLiist from "./components/NoteLiist";
import NodeStatus from "./components/NodeStatus";
import NoteHeader from "./components/NoteHeader"

function App() {
  const [notes,setNotes] = useState([]);
  const [sortBy,setSortBy] = useState("")

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
      <NoteHeader
        notes={notes} 
        sortBy={sortBy} 
        onSort={(e)=>setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote 
         onAddNote={handleAddNote}
        />
        <div className="note-container">
          <NodeStatus
            notes={notes}
          />
          <NoteLiist 
           notes={notes} 
           sortBy={sortBy} 
           onDeleted={handleOnDeleted} 
           onCompleted={handleOnCompleted}
          />
        </div>
      </div>
  </div>
  ) 
}

export default App;
