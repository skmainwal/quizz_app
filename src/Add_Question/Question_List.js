import React from "react";
import Question_Api from "../My_Api/Question_Api";
import Show_Question from "./Show_Question";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { addQuestionAction } from "../store/store";
import { useHistory } from "react-router-dom";
function Question_List() {
  const history = useHistory();
  // console.log(Question_Api);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  // console.log("this is state", state);

  const question = {
    id: shortid.generate(),
    text: "",
    choices: "",
    correct: "",
  };

  const questonHandler = () => {
    dispatch(addQuestionAction(question));
    history.push("/question");
  };

  return (
    <div className="container">
      {/* {Question_Api.map((question) => {
        return <Show_Question question={question} />;
      })} */}

      <button onClick={questonHandler}> Add Question</button>
    </div>
  );
}

export default Question_List;
