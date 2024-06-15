function NoteLiist({notes}) {
  return (
    <div className="note-list">
      {notes.map((note)=>(
          <NoteItem key={note.id} note={note}/>
        ))}
    </div>
  );
}

export default NoteLiist;

function NoteItem ({note}){
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

return (
  <div className="note-item">
    <div className="note-item__header">
      <div>
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="actions">
        <button>❌</button>
        <input type="checkbox"/>
      </div>
    </div>
    <p className="note-item__footer">
      {new Date(note.createdAt).toLocaleDateString("en-US", options)}
    </p>
  </div>
);
}