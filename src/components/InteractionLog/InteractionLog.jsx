import React from 'react'
import Navtop from '../Navbar/Navtop'
import './InteractionLog.css'


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
    const logEntries = [
      {
        dateTime: '2023-11-01 14:30',
        location: 'Park',
        officer: 'Officer Smith',
        summary: 'Met with victim to discuss the case.'
      },
      // Add more log entries as needed
    ];
  
    return (
      <div className="interactionlog-container">
        <h2>Interaction Log</h2>
        {logEntries.map((entry, index) => (
          <InteractionLogEntry key={index} {...entry} />
        ))}
      </div>
    );
  };
  
  export default InteractionLog;