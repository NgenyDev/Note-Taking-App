import React from 'react';
import './Footer.css'; // Optional: Create this file for footer-specific styles.

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </footer>
    );
};

export default Footer;