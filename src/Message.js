import { Hidden } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Message() {
  const state = useSelector((state) => state);
  const history = useHistory();
  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
      <div className="justify-content-center align-content-center mt-5">
        <h2 className="text-center"> Your score is {state.marks} </h2>
        <h3 className="text-center"> Best Of Luck!</h3>
      </div>
    </div>
  );
}

export default Message;
