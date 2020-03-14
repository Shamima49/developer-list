import React,{useState} from "react";
import "./Header.css";

let bincom = 0;
const Header = props => {
  
  return (
    <div className="head">
      <div className="header">
    
        <div className="count">
          <h4>
            Buddy Count :<br />
            <span className="bc">{props.buddy}</span>
          </h4>
        </div>
        <div className="income">
          <h4>
            Total Income :<br />
            <span className="amo">{props.amo}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
