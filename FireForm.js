// src/FireForm.js

import React, { useState } from 'react';
import './FireForm.css'; // Import CSS file

function FireForm({ onSubmit }) {
  // Define state variables for form fields
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [cause, setCause] = useState('');
  const [severity, setSeverity] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the fire data object
    const formData = { date, location, cause, severity, description };
    // Call the onSubmit callback function and pass the form data
    onSubmit(formData);
    // Reset form fields after submission
    setDate('');
    setLocation('');
    setCause('');
    setSeverity('');
    setDescription('');
  };

  return (
    <div className="fire-form-container">
      <h2>Enter Fire Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <label>Cause:</label>
          <input type="text" value={cause} onChange={(e) => setCause(e.target.value)} required />
        </div>
        <div>
          <label>Severity:</label>
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} required>
            <option value="">Select</option>
            <option value="minor">Minor</option>
            <option value="moderate">Moderate</option>
            <option value="major">Major</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FireForm;
