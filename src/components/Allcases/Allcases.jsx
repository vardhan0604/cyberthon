import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Table from "../Cases/Cases";
import userpfp from "../../img/userpfp.png";
import "./Allcases.css";
import DonutChart from "../Charts/DonutChart";
import Navtop from "../Navbar/Navtop";
const Allcases = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [showSolvedCases, setShowSolvedCases] = useState(true);

  const handleToggleCases = (showSolved) => {
    setShowSolvedCases(showSolved);
  };

  const transactions = [
    {
      id: 1,
      caseID: "1001",
      complainantName: "James Brown",
      incidentType: "Cyberstalking",
      currentStatus: "Verifying allegation",
    },
    {
      id: 2,
      caseID: "2002",
      complainantName: "Lisa Green",
      incidentType: "Online Harassment",
      currentStatus: "Assessing risk",
    },
    {
      id: 3,
      caseID: "3003",
      complainantName: "Mark Johnson",
      incidentType: "Financial Fraud",
      currentStatus: "Intake complete",
    },
  ];

  // Generate more transactions for testing purposes
  for (let i = 4; i <= 17; i++) {
    transactions.push({
      id: i,
      caseID: `10${i}`,
      complainantName: `Complainant ${i}`,
      incidentType: i % 2 === 0 ? "Cyberstalking" : "Financial Fraud",
      currentStatus: i % 3 === 0 ? "Intervention ongoing" : "Solved",
    });
  }

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(
        (transaction) =>
          (showSolvedCases
            ? transaction.currentStatus === "Solved"
            : transaction.currentStatus !== "Solved") &&
          (transaction.caseID.toLowerCase().includes(search.toLowerCase()) ||
            transaction.complainantName
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            transaction.incidentType
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            transaction.currentStatus
              .toLowerCase()
              .includes(search.toLowerCase()))
      )
    );
  }, [search, showSolvedCases, transactions]);

  const handleRowClick = (transaction) => {
    navigate(`/caase`);
  };

  return (
    <div className="Allcases">
      <Navtop />
      <div className="allcase-section">
        <div className="Cases allcases-cases">
          <input
            className="mainLoginInput CaseSearch"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="officer-button-container">
            <button
              className={showSolvedCases ? "active" : ""}
              onClick={() => handleToggleCases(true)}
            >
              Solved Cases
            </button>
            <button
              className={!showSolvedCases ? "active" : ""}
              onClick={() => handleToggleCases(false)}
            >
              Unsolved Cases
            </button>
          </div>

          <div className="data-container allcases-data-container">
            <div className="data-row header">
              <div className="data-cell">Case ID</div>
              <div className="data-cell">Complainant Name</div>
              <div className="data-cell">Incident Type</div>
              <div className="data-cell">Current Status</div>
            </div>
            {filteredTransactions.map((transaction) => (
              <div className="data-row" key={transaction.id}>
                <div className="data-cell">{transaction.caseID}</div>
                <div className="data-cell tooltip">
                  {transaction.complainantName}
                  <span className="tooltiptext">
                    Case ID: {transaction.caseID}
                    <br />
                    Complainant Name: {transaction.complainantName}
                    <br />
                    Incident Type: {transaction.incidentType}
                    <br />
                    Current Status: {transaction.currentStatus}
                  </span>
                </div>
                <div className="data-cell">{transaction.incidentType}</div>
                <div className="data-cell">{transaction.currentStatus}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="allcases-graph">
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Allcases;
