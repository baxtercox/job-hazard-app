// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          Job Hazard Analysis
        </h3>

        <div className="content-wrap">
          <nav className="navbar navbar-expand-sm bg-light navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item- m-1">
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/department"
                >
                  Create New Hazard
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/employee"
                >
                  Employee/Hazard Info
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/employee" element={<Employee />} />
            <Route path="/home" element={<Home />} />
            <Route path="/department" element={<Department />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
