import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Primary extends Component {
    render() {
      return (
        <div>
            <h2 className="text-center">Primary / Urgent care Guidelines</h2>
            <div className="text-center">
                <button className="btn btn-primary m-3 text-white" ><Link style={{"color":"white"}} to="/primary/guidelines">Managing Infections</Link></button>
                <button className="btn btn-primary" ><Link style={{"color":"white"}} to="/primary/general">General Guidance</Link></button>
            </div>
        </div>
      );
    }
  }
   
  export default Primary;