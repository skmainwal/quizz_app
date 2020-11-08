import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "./Add_Question/Question";
import Question_List from "./Add_Question/Question_List";
import { Provider } from "react-redux";
import store from "./store/store";
import { useHistory, Link } from "react-router-dom";
import FinalPaper from "./final_paper/FinalPaper";
import Message from "./Message";
import Home from "./Home";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className="text-dark text-center border p-3 quizz_app">
            Quiz - App
          </h1>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/question_list" component={Question_List} />
            <Route exact path="/question" component={Question} />
            <Route
              exact
              path="/finalquestionPaper/:id"
              component={FinalPaper}
            />
            <Route exact path="/message" component={Message} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
