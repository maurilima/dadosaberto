import React from "react";
import './assets/styles/style.css'
import BarNavegacao from "./components/BarNavegacao";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
       <BarNavegacao/>
        <Home />
    </div>
  );
}

export default App;
