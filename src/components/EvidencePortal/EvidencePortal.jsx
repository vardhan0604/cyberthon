// EvidencePortal.js

import React, { useState } from 'react';
import Navtop from '../Navbar/Navtop';
import './EvidencePortal.css';

const CaseFolder = ({ caseId, caseName, evidenceUsed, evidenceList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="case-folder">
      <div className="folder-header" onClick={toggleFolder}>
        <span>{caseName}</span>
        <span>Case ID: {caseId}</span>
        <span>Evidence Used for: {evidenceUsed}</span>
      </div>
      {isOpen && (
        <ul className="evidence-list">
          {evidenceList.map((evidence, index) => (
            <li key={index}>
              <a href="#">{evidence}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EvidencePortal = () => {
  const caseFolders = [
    {
      caseId: '12345',
      caseName: 'Case 1',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '67890',
      caseName: 'Case 2',
      evidenceUsed: 'Trial',
      evidenceList: ['Evidence 3', 'Evidence 4']
    },
    // Add more case folders as needed
  ];

  return (
    <div className="EvidencePortal">
      <Navtop />
      <div className="EvidencePortal-container">
        <h2 className="EvidencePortal-container-head">Evidence Portal</h2>
        <div className="case-folders">
          {caseFolders.map((caseFolder) => (
            <CaseFolder
              key={caseFolder.caseId}
              caseId={caseFolder.caseId}
              caseName={caseFolder.caseName}
              evidenceUsed={caseFolder.evidenceUsed}
              evidenceList={caseFolder.evidenceList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvidencePortal;
