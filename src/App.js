import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import CasePage from "./components/casePage/casePage";
import LoginPage from "./components/Login/Login";
import Officers from "./components/officers/officers";
import Allcases from "./components/Allcases/Allcases";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import InteractionLog from "./components/InteractionLog/InteractionLog";
import CasePagee from "./components/CasePaage/CasePagee";
import EvidencePortal from "./components/EvidencePortal/EvidencePortal";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDjsec2TjbFSkTom1C4Xx-fXSagCTPrTJo",
    authDomain: "cyberthon-8e6f0.firebaseapp.com",
    databaseURL: "https://cyberthon-8e6f0-default-rtdb.firebaseio.com",
    projectId: "cyberthon-8e6f0",
    storageBucket: "cyberthon-8e6f0.appspot.com",
    messagingSenderId: "554653440274",
    appId: "1:554653440274:web:3a96eece739f0af215fbcb",
    measurementId: "G-MS3FFCDJDF",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function getCities(db) {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/case" element={<CasePage />} />
          <Route path="/caase" element={<CasePagee />} />
          <Route path="/EvidencePortal" element={<EvidencePortal />} />
          <Route path="/InteractionLog" element={<InteractionLog />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/cases" element={<Allcases />} />
          <Route path="/annual" element={<Home />} />
          <Route path="/team" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
