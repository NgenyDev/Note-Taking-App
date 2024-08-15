import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light" : "dark"; // Toggle body class for theme
  };

  return (
    <div className="App">
      <header>
        <h1>Note-Taking App</h1>
        <button className="toggle-mode" onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;