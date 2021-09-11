import React from "react";
// import { Container, Row } from "react-bootstrap";
import './assets/styles/style.css'
import BarNavegate from "./components/BarNavegate";
import Main from "./pages/Main";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BarNavegate />

      <Main />

   
      {/* <Home /> */}
    </div>
  );
}

export default App;
