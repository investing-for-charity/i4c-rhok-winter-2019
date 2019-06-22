import React from "react";

// components
import ContributionForm from "./components/ContributionForm";
import Simulation from "./components/Simulation";
import About from "./components/About";

// scripts
import "./scripts/contributionForm";

// styles
import "./styles/main.css";
import "react-input-range/lib/css/index.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <ContributionForm />
        <Simulation />
        <About />
      </div>
    </div>
  );
}

export default App;
