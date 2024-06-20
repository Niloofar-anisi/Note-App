function NoteHeader({notes,sortBy ,onSort}) {
 
  return (
    <div className="note-header">
      <h2>My Notes({notes.length})</h2>
      <select value={sortBy} onChange={onSort}>
        <option value="earliest">sort based on earliest notes</option>
        <option value="latest">sort based on latest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
    </div>
  )
}

export default NoteHeader