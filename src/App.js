<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import React from 'react'; // Remove useState import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remove Link import
>>>>>>> 4589306ff834f2d61d6ed78cd20bb42bebf04387
import Header from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
<<<<<<< HEAD
import Login from './components/Login';
import Help from './components/Help';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Notes from './components/Notes';
import './App.css'; 
import AddNoteForm from './components/AddNoteForm';

const App = () => {
    const [showCarousel, setShowCarousel] = useState(true);

    // Handle clicks anywhere on the page to hide the carousel
    const handleClick = () => {
        setShowCarousel(false);
    };

    useEffect(() => {
        // Attach event listener to document
        document.addEventListener('click', handleClick);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <Router>
            <Header />
            <div className="app-container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/blog" element={<Notes />} /> {/* Ensure path casing consistency */}
                    <Route path="/add-note" element={<AddNoteForm />} />
                </Routes>
                {/* Conditionally render the carousel */}
                {showCarousel && <Carousel />}
            </div>
            <Footer />
=======
import Blog from './components/Blog';
import Login from './components/Login'; // Import the Login component
import './App.css';
import Help from './components/Help';


const App = () => {
    return (
        <Router>
            <Header />
            {/* Removed the navigation bar and Editor conditional rendering */}
            <Routes>
                <Route path='/Help' element={<Help />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
>>>>>>> 4589306ff834f2d61d6ed78cd20bb42bebf04387
        </Router>
    );
};

export default App;
<<<<<<< HEAD

=======
>>>>>>> 4589306ff834f2d61d6ed78cd20bb42bebf04387
