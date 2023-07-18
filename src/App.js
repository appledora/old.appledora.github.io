import "./App.css";
import Sidepane from "./components/Sidepan";
import AnimatedRoutes from "./components/AnimatedRoutes";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Sidepane />
          <AnimatedRoutes />
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
