// FireTable.js

import React, { useState } from 'react';
import './FireTable.css'; // Import CSS file

function FireTable({ submittedData }) {
  // State to manage data updates
  const [updatedData, setUpdatedData] = useState(submittedData);

  // Function to delete a row
  const deleteRow = (index) => {
    const newData = [...updatedData];
    newData.splice(index, 1);
    setUpdatedData(newData);
  };

  // Function to update a row
  const updateRow = (index, field, newValue) => {
    const updatedRows = [...updatedData];
    updatedRows[index][field] = newValue;
    setUpdatedData(updatedRows);
  };

  return (
    <div className="table-container">
      <h2>Submitted Fire Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Cause</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {updatedData.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={data.date}
                  onChange={(e) => updateRow(index, 'date', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => updateRow(index, 'location', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.cause}
                  onChange={(e) => updateRow(index, 'cause', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.severity}
                  onChange={(e) => updateRow(index, 'severity', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.description}
                  onChange={(e) => updateRow(index, 'description', e.target.value)}
                />
              </td>
              <td>
                {/* Button for delete */}
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FireTable;
