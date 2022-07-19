import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Hospital extends Component {
    render() {
      return (
        <div className="text-center">
        <h2 className="text-center">Hospital Guidelines</h2>
                <button className="btn btn-primary m-3"><Link style={{"color":"white"}} to="/hospital/guidelines">Managing Infections</Link></button>
                <button className="btn btn-primary"><Link style={{"color":"white"}} to="/hospital/general">General Guidance</Link></button>
            </div>
      );
    }
  }
   
  export default Hospital;