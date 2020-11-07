import React from "react";
import "./Card.css";

function Card({ choice }) {
  const content = choice.text;
  //   console.log(content);
  return (
    <div className="card">
      <h3>{content}</h3>
    </div>
  );
}

export default Card;
