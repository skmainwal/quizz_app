import React from "react";

import Show_Question from "./Show_Question";
import { useSelector } from "react-redux";

import { useHistory, Link } from "react-router-dom";
function Question_List() {
  const history = useHistory();

  const state = useSelector((state) => state);
  // console.log("thie is my staete ", state);

  const questonHandler = () => {
    // dispatch(addQuestionAction(question));
    history.push("/question");
  };

  const sampleSubmitHandler = () => {
    //  history.push("/finalquestionPaper");
    if (state.question.length === 0) {
      history.push("/question_list");
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Quizz Sample</h2>
      </div>
      <Link
        to={`/finalquestionPaper/final_List`}
        className="btn btn-dark float-right"
        onClick={sampleSubmitHandler}
      >
        Submit Sample
      </Link>

      {state.question.map((que, index) => {
        return <Show_Question que={que} index={+index} />;
      })}

      <button className="btn btn-dark" onClick={questonHandler}>
        Add Question
      </button>
    </div>
  );
}

export default Question_List;
