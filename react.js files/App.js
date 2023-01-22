import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Private from "./pages/Private";
import Alert from "./pages/Alert";
import Public from "./pages/Public";
import Home from "./pages/Home";
const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Public">Share Location</Link>
              </li>
              <li>
                <Link to="/Private">Pick Location</Link>
              </li>
              <li>
                <Link to="/Alert">Alerts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Public" element={<Public/>} />
            <Route path="/Private" element={<Private/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Alert" element={<Alert/>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
