import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <button
        className="btn btn-dark m-5 p-4 create_quizz"
        onClick={() => history.push("/question_list")}
      >
        Create New Quizz
      </button>
    </div>
  );
}

export default Home;
