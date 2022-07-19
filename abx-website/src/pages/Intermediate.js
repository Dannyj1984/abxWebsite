import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Intermediate extends Component {
    render() {
      return (
        <div>
            <h2 className="text-center">Intermediate care Guidelines</h2>
            <div className="text-center">
                <button className="btn btn-primary m-3" ><Link style={{"color":"white"}} to="/intermediate/guidelines">Managing Infections</Link></button>
                <button className="btn btn-primary" ><Link style={{"color":"white"}} to="/intermediate/general">General Guidance</Link></button>
            </div>
        </div>
      );
    }
  }
   
  export default Intermediate;