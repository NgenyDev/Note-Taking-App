import React, { useState, useEffect } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";
import NoteDetail from "./NoteDetail"; // Import the NoteDetail component

function Dashboard() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNote, setSelectedNote] = useState(null); // State to hold the selected note

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    const newNote = { id: Date.now(), title, text, isEditing: false };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (selectedNote && selectedNote.id === id) {
      setSelectedNote(null); // Clear the selected note if it's deleted
    }
  };

  const editNote = (id, newTitle, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, text: newText, isEditing: false }
          : note
      )
    );
  };

  const toggleEditing = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleNoteClick = (note) => {
    setSelectedNote(note); // Set the selected note to display details
  };

  const handleCloseDetail = () => {
    setSelectedNote(null); // Clear the selected note
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <NoteInput addNote={addNote} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
        toggleEditing={toggleEditing}
        onNoteClick={handleNoteClick} // Pass the click handler to NoteList
      />
      {selectedNote && (
        <NoteDetail note={selectedNote} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default Dashboard;