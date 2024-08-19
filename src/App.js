import React from 'react'; // Remove useState import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remove Link import
import Header from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
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
        </Router>
    );
};

export default App;
