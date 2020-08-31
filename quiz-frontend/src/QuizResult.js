import React from "react";

export default ({ close }) => (
    
  <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}> 
      Quiz Result 
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '3vh'}}>
      {" "}
      You have {close} wrong quizes
      <br />
    </div>
  </div>
);