import React from "react";

function NoteList({ notes, deleteNote, editNote, toggleEditing, onNoteClick }) {
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          className="note-preview"
          onClick={() => onNoteClick(note)} // Handle note click
        >
          <h3>{note.title}</h3>
          <p>{note.text.substring(0, 100)}...</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
          <button onClick={() => toggleEditing(note.id)}>
            {note.isEditing ? "Save" : "Edit"}
          </button>
          {note.isEditing && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editNote(note.id, e.target.title.value, e.target.text.value);
              }}
            >
              <input
                type="text"
                name="title"
                defaultValue={note.title}
              />
              <textarea
                name="text"
                defaultValue={note.text}
              ></textarea>
              <button type="submit"
              >Save</button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;