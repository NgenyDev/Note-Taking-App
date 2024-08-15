import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleAddNote = () => {
    if (title.trim() && text.trim()) {
      addNote(title, text);
      setTitle("");
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add" onClick={handleAddNote}
      style={{ color: 'white', 
        border: 'none', 
        background: 'green' }}>Add Note</button>
    </div>
  );
}

export default NoteInput;