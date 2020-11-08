import React, { useState } from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addMarks } from "../store/store";
function Card({ choice, id }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const content = choice.text;

  function onClick(choice) {
    if (id && state.correctAns.indexOf(content) >= 0) {
      let mark = state.marks + 1;
      console.log(mark);
      dispatch(addMarks(mark));

      alert("Correct");
    } else if (id) {
      alert("Wrong");
    }
  }

  return (
    <div className="card " onClick={onClick}>
      <h3>{content}</h3>
    </div>
  );
}

export default Card;
