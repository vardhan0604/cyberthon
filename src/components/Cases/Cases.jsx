import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Cases.css";

const Table = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions, setTransactions] = useState([
    {
      caseID: "1001",
      complainantName: "James Brown",
      incidentType: "Cyberstalking",
      currentStatus: "Verifying allegation",
    },
    {
      caseID: "2002",
      complainantName: "Lisa Green",
      incidentType: "Online Harassment",
      currentStatus: "Assessing risk",
    },
    {
      caseID: "3003",
      complainantName: "Mark Johnson",
      incidentType: "Financial Fraud",
      currentStatus: "Intake complete",
    },
    {
      caseID: "4004",
      complainantName: "Jane Smith",
      incidentType: "Domestic Violence",
      currentStatus: "Intervention ongoing",
    },
    {
      caseID: "1001",
      complainantName: "James Brown",
      incidentType: "Cyberstalking",
      currentStatus: "Verifying allegation",
    },
    {
      caseID: "2002",
      complainantName: "Lisa Green",
      incidentType: "Online Harassment",
      currentStatus: "Assessing risk",
    },
    {
      caseID: "3003",
      complainantName: "Mark Johnson",
      incidentType: "Financial Fraud",
      currentStatus: "Intake complete",
    },
    {
      caseID: "4004",
      complainantName: "Jane Smith",
      incidentType: "Domestic Violence",
      currentStatus: "Intervention ongoing",
    },
    {
      caseID: "1001",
      complainantName: "James Brown",
      incidentType: "Cyberstalking",
      currentStatus: "Verifying allegation",
    },
    {
      caseID: "2002",
      complainantName: "Lisa Green",
      incidentType: "Online Harassment",
      currentStatus: "Assessing risk",
    },
    {
      caseID: "3003",
      complainantName: "Mark Johnson",
      incidentType: "Financial Fraud",
      currentStatus: "Intake complete",
    },
    {
      caseID: "4004",
      complainantName: "Jane Smith",
      incidentType: "Domestic Violence",
      currentStatus: "Intervention ongoing",
    },
    // Add more static data here...
  ]);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(
        (transaction) =>
          transaction.caseID.toLowerCase().includes(search.toLowerCase()) ||
          transaction.complainantName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          transaction.incidentType
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          transaction.currentStatus.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, transactions]);


  const handleRowClick = (transaction) => {
    // Assuming you have a route defined as '/details/:caseID'
    // navigate(`/details/${transaction.caseID}`);
    navigate(`/caase`);
  };

  return (
    <div className="Cases">
      <input
      className="mainLoginInput CaseSearch"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div class="data-container">
        <div class="data-row header">
          <div class="data-cell">Case ID</div>
          <div class="data-cell">Complainant Name</div>
          <div class="data-cell">Incident Type</div>
          <div class="data-cell">Current Status</div>
        </div>
        {filteredTransactions.map((transaction) => (
          <div class="data-row" key={transaction.id}  onClick={() => handleRowClick(transaction)}>
            <div class="data-cell">{transaction.caseID}</div>
            <div class="data-cell">{transaction.complainantName}</div>
            <div class="data-cell">{transaction.incidentType}</div>
            <div class="data-cell">{transaction.currentStatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
