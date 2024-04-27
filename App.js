// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import FireForm from './FireForm';
import FireTable from './FireTable';
import Login from './Login';
import Signup from './Signup'; // Import the Signup component
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = React.useState([]);

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/fireform" element={<FireForm onSubmit={handleFormSubmit} />} />
            <Route path="/firetable" element={<FireTable submittedData={submittedData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

