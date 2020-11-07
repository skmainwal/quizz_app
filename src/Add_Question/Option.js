import React from "react";
import "./Option.css";
function Option() {
  return (
    <div className="option">
      <h2 className="option_title">hello option 1</h2>
      <button type="button" className="btn btn-outline ">
        <i className=" fa fa-trash option_delete"></i>
      </button>
    </div>
  );
}

export default Option;
