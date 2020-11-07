import React from "react";
import Card from "./Card";
import Question_Api from "../My_Api/Question_Api";
import Question_List from "./Question_List";
function Show_Question({ question }) {
  const que = question.question1;
  console.log(que);

  return (
    <>
      <div className="container">
        <h2>
          <span>Ques:-</span> {que.text}
        </h2>
        <div className="show_question_card">
          {que.choices.map((choice) => {
            return <Card choice={choice} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Show_Question;
