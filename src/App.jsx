import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
          <Landing />
        </header>
      </div>
    </>
  );
}

export default App;
