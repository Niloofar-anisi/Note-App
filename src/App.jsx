import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLiist from "./components/NoteLiist";
import NodeStatus from "./components/NodeStatus";
import NoteHeader from "./components/NoteHeader";

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "completed": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown Error" + action.type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [sortBy, setSortBy] = useState("");

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };

  const handleOnDeleted = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleOnCompleted = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "completed", payload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NodeStatus notes={notes} />
          <NoteLiist
            notes={notes}
            sortBy={sortBy}
            onDeleted={handleOnDeleted}
            onCompleted={handleOnCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
