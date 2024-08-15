import React, { useState } from "react";

function Note({ note, deleteNote, editNote, toggleEditing }) {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newText, setNewText] = useState(note.text);

  const handleEdit = () => {
    editNote(note.id, newTitle, newText);
  };

  return (
    <div>
      {note.isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="save" onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.text}</p>
          <button className="edit" onClick={() => toggleEditing(note.id)}>Edit</button>
          <button 
  className="delete" 
  onClick={() => deleteNote(note.id)}
  style={{
    color: 'white',
    border: 'none',
    backgroundColor: '#F44336', /* Red color */
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  }}>
  Delete
</button>
        </div>
      )}
    </div>
  );
}

export default Note;