import React from "react";
import "./Option.css";
function Option({ text, id, clicked, checked }) {
  return (
    <div className="option">
      <h2 className="option_title">{text}</h2>
      <div className=" d-flex text-align-center box">
        <button type="button" className="btn btn-outline " onClick={clicked}>
          <i className=" fa fa-trash option_delete"></i>
        </button>
        <div className="pl-3 mt-3 mr-2  ">
          <span className="  material-icons check" onClick={checked}>
            check_circle_outline
          </span>
        </div>
      </div>
    </div>
  );
}

export default Option;
