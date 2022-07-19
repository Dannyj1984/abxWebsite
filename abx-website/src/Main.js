import React, { Component } from "react";
import {
    Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Primary from "./pages/Primary";
import Intermediate from "./pages/Intermediate";
import Hospital from "./pages/Hospital";
import Home from "./pages/Home";
import PrimaryGuidelines from "./pages/PrimaryGuidelines";
import PrimaryGeneral from "./pages/PrimaryGeneral";
import IntermediateGuidelines from "./pages/IntermediateGuidelines";
import IntermediateGeneral from "./pages/IntermediateGeneral";
import HospitalGuidelines from "./pages/HospitalGuidelines";
import HospitalGeneral from "./pages/HospitalGeneral";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <Home />

              
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                          <NavLink to="/primary">
                            <a className="nav-link" href="/primary">
                              Primary Care |
                            </a>
                          </NavLink>
                        </li>
                        <li className="nav-item pr-2"><NavLink to="/intermediate"><a className="nav-link" href="/intermediate">Intermediate Care |</a></NavLink></li>
                        <li className="nav-item"><NavLink to="/hospital"><a className="nav-link" href="/hospital">Hospital</a></NavLink></li>
                    </ul>
                  </div>
              </nav>
              <div className="content">
              <Routes>
                  <Route path="/primary" element={<Primary/>}/>
                  <Route path="/hospital" element={<Hospital/>}/>
                  <Route path="/intermediate" element={<Intermediate/>}/>
                  <Route path="primary/guidelines" element={<PrimaryGuidelines />}/>
                  <Route path="primary/general" element={<PrimaryGeneral />}/>
                  <Route path="intermediate/guidelines" element={<IntermediateGuidelines />}/>
                  <Route path="intermediate/general" element={<IntermediateGeneral />}/>
                  <Route path="hospital/guidelines" element={<HospitalGuidelines />}/>
                  <Route path="hospital/general" element={<HospitalGeneral />}/>
              </Routes>
              </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;