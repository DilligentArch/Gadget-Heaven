import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to send form data to a server or email service here
        console.log('Form submitted:', formData);
        toast.success('Message sent successfully!');

    };

    return (
        <div className="w-3/4 mx-auto my-10 p-6 border-2 rounded-lg bg-white max-w-screen-2xl">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 border rounded h-32"
                    required
                />
                <button type="submit" className="btn bg-purple-600 text-white rounded-lg py-2">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
