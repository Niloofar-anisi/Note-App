function NoteLiist({notes , onDeleted , onCompleted , sortBy}) {

let sortedNotes = notes;
if(sortBy === "earliest")
  sortedNotes = [...notes].sort(
  (a,b)=>new Date(a.createdAt) - new Date(b.createdAt)
)

if(sortBy === "latest")
  sortedNotes = [...notes].sort(
  (a,b)=>new Date(b.createdAt) - new Date(a.createdAt)
)

if (sortBy === "completed")
  sortedNotes = [...notes].sort(
  (a,b) => Number(a.completed) - Number(b.completed)
)

  return (
    <div className="note-list">
      {sortedNotes.map((note)=>(
          <NoteItem 
            key={note.id} 
            note={note} 
            onDeleted={onDeleted} 
            onCompleted={onCompleted}
          />
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