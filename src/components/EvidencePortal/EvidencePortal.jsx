// EvidencePortal.js

import React, { useState } from 'react';
import Navtop from '../Navbar/Navtop';
import './EvidencePortal.css';

const CaseFile = ({ fileId, fileName, fileType, fileSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="EvidencePortal-case-file">
      <div className="EvidencePortal-file-header" onClick={toggleFile}>
        <span>{fileName}</span>
        <span>ID: {fileId}</span>
        <span>Type: {fileType}</span>
        <span>Size: {fileSize}</span>
      </div>
      {isOpen && (
        <div className="EvidencePortal-file-details">
          Details go here...
        </div>
      )}
    </div>
  );
};

const EvidencePortal = () => {
  const caseFiles = [
    {
      fileId: '1',
      fileName: 'File 1',
      fileType: 'txt',
      fileSize: '10 KB'
    },
    {
      fileId: '2',
      fileName: 'File 2',
      fileType: 'pdf',
      fileSize: '500 KB'
    },
    // Add more case files as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [password, setPassword] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '6543') {
      setShowContent(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="EvidencePortal">
      <Navtop />
      <div className="EvidencePortal-container">
        <h2 className="EvidencePortal-container-head">Evidence Portal</h2>

        {!showContent ? (
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="password-input"
            />
            <button type="submit" className="password-button">Submit</button>
          </form>
        ) : (
          <>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search files..."
              className="EvidencePortal-search"
            />

            <div className="EvidencePortal-case-files">
              {caseFiles
                .filter((file) =>
                  Object.values(file).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((caseFile) => (
                  <CaseFile
                    key={caseFile.fileId}
                    fileId={caseFile.fileId}
                    fileName={caseFile.fileName}
                    fileType={caseFile.fileType}
                    fileSize={caseFile.fileSize}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EvidencePortal;
