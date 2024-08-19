import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import your CSS file

const Home = () => {
  return (
    <header className="home-header">
      <div className="home-content">
        <h1>
          The simplest way <br /> to keep notes
        </h1>
        <h2>Note Taking App</h2>
<<<<<<< HEAD
        <p className="para">
          All your notes, synced on all your devices. Get Note-Taking app now for iOS,
=======
        <p>
          All your notes, synced on all your devices. Get Simplenote now for iOS,
>>>>>>> 4589306ff834f2d61d6ed78cd20bb42bebf04387
          <br /> Android, Mac, Windows, Linux, or in your browser.
        </p>
        <Link to="/signup">
          <button className="signup-button">Sign Up Now</button>
        </Link>
      </div>
    </header>
  );
};

export default Home;
