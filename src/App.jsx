import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
        </header>
      </div>
    </>
  );
}

export default App;
