import React from "react";
import { useSelector } from "react-redux";
import Show_Question from "../Add_Question/Show_Question";
import { useParams, useHistory } from "react-router-dom";

function FinalPaper() {
  const history = useHistory();
  const state = useSelector((state) => state);
  //   console.log("thie is my staete ", state);
  const { id } = useParams();
  console.log("this is my question id ", id);

  return (
    <div className="container">
      <div className="d-flex justify-content-md-between mb-5">
        <button
          className="btn btn-dark p-2"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </button>
        <h2> Test Your Knowledge</h2>
        <button
          className="btn btn-primary "
          onClick={() => {
            history.push("/message");
          }}
        >
          Submit
        </button>
      </div>
      {state.question.map((que, index) => {
        return <Show_Question que={que} index={+index} id={id} />;
      })}
    </div>
  );
}

export default FinalPaper;
