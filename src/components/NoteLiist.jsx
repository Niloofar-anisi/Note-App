function NoteLiist({notes , onDeleted , onCompleted}) {
  return (
    <div className="note-list">
      {notes.map((note)=>(
          <NoteItem key={note.id} note={note} onDeleted={onDeleted} onCompleted={onCompleted}/>
        ))}
    </div>
  );
}

export default NoteLiist;

function NoteItem ({note , onDeleted, onCompleted}){
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

return (
  <div className={`note-item ${note.Completed ? "completed" : "" }`}>
    <div className="note-item__header">
      <div>
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="actions">
        <button onClick={()=>onDeleted(note.id)}>❌</button>
        <input name={note.id} onChange={onCompleted} type="checkbox" checked={note.Completed} id={note.id} value={note.id}/>
      </div>
    </div>
    <p className="note-item__footer">
      {new Date(note.createdAt).toLocaleDateString("en-US", options)}
    </p>
  </div>
);
}