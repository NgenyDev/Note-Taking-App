import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;