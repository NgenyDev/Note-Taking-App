import React from 'react';
import './Footer.css'; // Make sure to create this file with the updated styles.

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;