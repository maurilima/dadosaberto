import React from "react";
import './assets/styles/style.css'
import BarNavegate from "./components/BarNavegate";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
       <BarNavegate/>
        <Home />
    </div>
  );
}

export default App;
