import React from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addMarks } from "../store/store";
function Card({ choice, id }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let mark = state.marks;
  console.log("this is my marks", mark);
  const content = choice.text;

  function onClick() {
    if (id && state.correctAns.indexOf(content) >= 0) {
      mark = mark + 1;
      console.log("updated marks", mark);
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
