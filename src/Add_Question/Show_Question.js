import React from "react";

import Card from "./Card";

function Show_Question({ que, index, id }) {
  console.log("this is my index ", index);
  return (
    <>
      <div className="container">
        <h2>
          <span>Ques:({index + 1})</span> {que.text}
        </h2>
        <div className="show_question_card">
          {que.choices.map((choice) => {
            return <Card choice={choice} id={id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Show_Question;
