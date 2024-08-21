import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    destination: '',
    billableHours: '',
    isBillable: false,
  });

  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app">
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="label-container">
            <label>First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Middle Name:
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="label-container">
            <label>Birth Date:
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="label-container">
            <label>Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="label-container">
            <label>Start Time:
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>End Time:
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="label-container">
            <label>Job Position:
              <input
                type="text"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Team:
              <select
                name="team"
                value={formData.team}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
                <option value="team3">Team 3</option>
              </select>
            </label>
          </div>
          <div className="label-container">
            <label>Destination:
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="destination1">Destination 1</option>
                <option value="destination2">Destination 2</option>
                <option value="destination3">Destination 3</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="label-container">
            <label>Billable Hours:
              <input
                type="number"
                name="billableHours"
                value={formData.billableHours}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label-container">
            <label>Is Billable:
              <input
                type="checkbox"
                name="isBillable"
                checked={formData.isBillable}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="submit-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

// export default App;
ReactDOM.render(<App />,document.getElementById("root"));
