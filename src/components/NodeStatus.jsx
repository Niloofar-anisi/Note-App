function NodeStatus({ notes}) {
    const allNotes = notes.length;
    const completedNotes = notes.filter((not)=>not.completed).length
    const openNotes = allNotes - completedNotes
  if (!allNotes)return <h2 className="No-Note">No text available, please add a new text.</h2>
    return (
      <ul className="note-status">
        <li>
          All <span>{allNotes}</span>
        </li>
        <li>
          Completed <span>{completedNotes}</span>
        </li>
        <li>
          Open <span>{openNotes}</span>
        </li>
      </ul>
    );
  }
  
  export default NodeStatus;
  