import React from "react";

export const Main = (props) =>  {
  return(
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>Main Dumb Component</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button onClick={() => props.changeUsername("Owais Khan")} className="btn btn-primary">Change Username</button>
        </div>
      </div>
    </div>
  );
}
