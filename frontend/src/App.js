import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import InvestorsPage from "./components/InvestorsPage";
import CommitmentsPage from "./components/CommitmentsPage";

function App() {
  const [activeTab, setActiveTab] = useState("investors");

  return (
    <div className="App">
      <div>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "investors" && <InvestorsPage/>}
        {activeTab === "commitments" && <CommitmentsPage/>}
      </div>
    </div>
  );
}

export default App;
