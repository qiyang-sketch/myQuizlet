import React from "react";

export default ({ close }) => (
    
  <div>
    <div className="header"> Quiz Result </div>
    <div className="content">
      {" "}
      You have {close} wrong quizes
      <br />
    </div>
  </div>
);