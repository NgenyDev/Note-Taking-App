import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactDetails.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        toast.success('Message sent successfully!');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                />

                <button type="submit">Send Message</button>
            </form>
            <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-545 current_page_item menu-item-596"><a href="https://simplenote.com/help/" aria-current="page">Help</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-112"><a href="https://app.simplenote.com/signup/">Sign Up</a></li>
            <ToastContainer />
        </div>
    );
};

export default Contact;
