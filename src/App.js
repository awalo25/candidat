
import './App.css';
import React from "react";

import CandidatureComponent from "./CandidatureComponent"; // Importez le composant CandidatureComponent

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <CandidatureComponent />{" "}
        {/* Incluez le composant CandidatureComponent ici */}
      </header>
    </div>
  );
}
export default App;