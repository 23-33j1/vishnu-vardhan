// App.jsx or App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Home component
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>My name Vishnu Vardhan, I am from Tadipatri.</p>
    </div>
  );
}

// About component with form: Name, Present Institute, Last Qualification
function About() {
  const [formData, setFormData] = useState({
    name: '',
    presentInstitute: '',
    lastQualification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`About Form submitted!\nName: ${formData.name}\nPresent Institute: ${formData.presentInstitute}\nLast Qualification: ${formData.lastQualification}`);
    setFormData({
      name: '',
      presentInstitute: '',
      lastQualification: '',
    });
  };

  return (
    <div>
      <h2>About Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="presentInstitute">Present Institute:</label><br />
          <input
            type="text"
            id="presentInstitute"
            name="presentInstitute"
            value={formData.presentInstitute}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="lastQualification">Last Qualification:</label><br />
          <input
            type="text"
            id="lastQualification"
            name="lastQualification"
            value={formData.lastQualification}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Contact component with contact form: Name, Email, Message
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Contact Form submitted!\nName: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`);
    setFormData({
      name: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="mobile">Mobile Number:</label><br />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"  // optional: enforces 10 digit number
            title="Please enter a 10-digit mobile number"
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Main App component with routing and navigation
function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/home" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
