import React, { useState } from "react";
import Option from "./Option";
import shortid from "shortid";
import "./Question.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addOptionAction,
  addQuestionText,
  addQuestionAction,
  clearTextStore,
  clearOptStore,
  updateOpt,
  AddCorrectAns,
} from "../store/store";
function Question() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // console.log("this my added question ", state);

  const [text, setText] = useState("");

  const [option, setOption] = useState("");

  const submitOption = (e) => {
    e.preventDefault();
    const new_option = { id: shortid.generate(), check: false, text: option };
    setOption("");
    dispatch(addOptionAction(new_option));
  };

  const questionTitlehandler = (text) => {
    // e.preventDefault();
    setText(text);
    // console.log(text);

    dispatch(addQuestionText(text));
  };

  const questionSubmitHandler = () => {
    const question = {
      id: shortid.generate(),
      text: state.question_text,
      choices: state.opt,
      correct: "",
    };
    if (text === "" || state.opt.length < 3) {
      history.push("/question");
    } else {
      dispatch(addQuestionAction(question));
      dispatch(clearTextStore());
      dispatch(clearOptStore());

      history.push("/question_list");
    }
  };

  const deleteHandler = (id) => {
    const arrOption = state.opt.filter((choice) => {
      return choice.id !== id;
    });
    dispatch(updateOpt(arrOption));
  };

  const checkedhandler = (id) => {
    let correctArray;
    const new_option = state.opt.map((choice) => {
      return choice.id === id
        ? { id: id, check: !choice.check, text: choice.text }
        : choice;
    });

    new_option.forEach((choice) => {
      if (choice.check) {
        correctArray = choice.text;
      }
    });

    // console.log("this is my new Optin", new_option);
    setOption("");
    dispatch(AddCorrectAns(correctArray));
    dispatch(updateOpt(new_option));
  };
  return (
    <div className="question container">
      <div>
        <button
          className="btn btn-dark"
          onClick={() => {
            history.push("/");
          }}
        >
          {" "}
          Home
        </button>
        <button
          className="btn btn-primary float-right"
          onClick={questionSubmitHandler}
        >
          Sumbit Question
        </button>
      </div>

      <label className="ques">Ques.</label>
      <input
        type="text"
        placeholder="write your question"
        className="question_input"
        value={text}
        onChange={(e) => questionTitlehandler(e.target.value)}
        required
      />

      <div className="question_option">
        {state.opt.map((choice) => {
          return (
            <Option
              key={choice.id}
              id={choice.id}
              text={choice.text}
              clicked={() => deleteHandler(choice.id)}
              checked={() => checkedhandler(choice.id)}
            />
          );
        })}
      </div>
      <form onSubmit={submitOption} className="option_form">
        <input
          type="text"
          className="add_option"
          placeholder="Add New Choice"
          name="text"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default Question;
