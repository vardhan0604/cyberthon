// import React from 'react'
// import Navtop from '../Navbar/Navtop'
// import './InteractionLog.css'


// const InteractionLogEntry = ({ dateTime, location, officer, summary }) => {
//   return (
//     <div className="interactionlog-row">
//       <div className="interactionlog-col">{dateTime}</div>
//       <div className="interactionlog-col">{location}</div>
//       <div className="interactionlog-col">{officer}</div>
//       <div className="interactionlog-col">{summary}</div>
//     </div>
//   );
// };
// const InteractionLog = () => {
//     const logEntries = [
//       {
//         dateTime: '2023-11-01 14:30',
//         location: 'Park',
//         officer: 'Officer Smith',
//         summary: 'Met with victim to discuss the case.'
//       },
//       // Add more log entries as needed
//     ];
  
//     return (
//       <div className='InteractionLog'>
//         <Navtop />
//         <div className="interactionlog-container">
//         <h2 className='interactionlog-container-head'>Interaction Log</h2>
//         {logEntries.map((entry, index) => (
//           <InteractionLogEntry key={index} {...entry} />
//         ))}
//       </div>
//       </div>
//     );
//   };
  
//   export default InteractionLog;


import React, { useState } from 'react';
import Navtop from '../Navbar/Navtop';
import './InteractionLog.css';

const InteractionLogEntry = ({ dateTime, location, officer, summary }) => {
  return (
    <div className="interactionlog-row">
      <div className="interactionlog-col">{dateTime}</div>
      <div className="interactionlog-col">{location}</div>
      <div className="interactionlog-col">{officer}</div>
      <div className="interactionlog-col">{summary}</div>
    </div>
  );
};


const InteractionLog = () => {
  const [formData, setFormData] = useState({
    dateTime: '',
    location: '',
    officer: '',
    summary: ''
  });

  const [logEntries, setLogEntries] = useState([
    {
      dateTime: '2023-11-01 14:30',
      location: 'Park',
      officer: 'Officer Smith',
      summary: 'Met with victim to discuss the case.'
    },
    // Add more log entries as needed
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogEntries([...logEntries, formData]);
    setFormData({
      dateTime: '',
      location: '',
      officer: '',
      summary: ''
    });
  };

  return (
    <div className="InteractionLog">
      <Navtop />
      <div className="interactionlog-container">
        <h2 className="interactionlog-container-head">Interaction Log</h2>

        <form onSubmit={handleSubmit} className='interactionlog-form'>
          <input
            type="text"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className='interactionlog-input'
            placeholder="Date and Time"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className='interactionlog-input'
            placeholder="Location"
          />
          <input
            type="text"
            name="officer"
            value={formData.officer}
            onChange={handleChange}
            className='interactionlog-input'
            placeholder="Officer Name"
          />
          <input
            type="text"
            name="summary"
            className='interactionlog-input'
            value={formData.summary}
            onChange={handleChange}
            placeholder="Summary"
          />
          <button type="submit" className='interactionlog-button'>Add Interaction</button>
        </form>

        {logEntries.map((entry, index) => (
          <InteractionLogEntry key={index} {...entry} />
        ))}
      </div>
    </div>
  );
};

export default InteractionLog;
