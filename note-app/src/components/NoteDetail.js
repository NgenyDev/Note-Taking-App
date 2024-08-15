import React from "react";

function NoteDetail({ note, onClose }) {
  if (!note) return null;

  return (
    <div className="note-detail">
      <button className="close" onClick={onClose}
      style={{ color: 'white', 
        border: 'none', 
        background: 'red' }}>Close</button>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
    </div>
  );
}

export default NoteDetail;