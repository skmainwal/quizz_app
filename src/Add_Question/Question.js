import React, { useState } from "react";
import Option from "./Option";
import shortid from "shortid";
import "./Question.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOptionAction } from "../store/store";
function Question() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("this my added question ", state);

  const [text, setText] = useState();

  const [option, setOption] = useState("");

  const submitOption = (e) => {
    e.preventDefault();
    const new_option = { id: shortid.generate(), text: option };
    setOption("");
    dispatch(addOptionAction(new_option));
  };

  const onsubmitQuestion = () => {};

  console.log(text);
  return (
    <div className="question container">
      <button className="btn btn-primary float-right"> Sumbit</button>
      <input
        type="text"
        placeholder="write your question"
        className="question_input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="question_option">
        <Option />
        <Option />
        <Option />
        <Option />
      </div>
      <form onSubmit={submitOption}>
        <input
          type="text"
          className="add_option"
          placeholder="Add New Choice"
          name="text"
          onChange={(e) => setOption(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Question;
