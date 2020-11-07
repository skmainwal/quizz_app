import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "./Add_Question/Question";
import Question_List from "./Add_Question/Question_List";
import { Provider } from "react-redux";
import store from "./store/store";
import { useHistory, Link } from "react-router-dom";
function App() {
  const history = useHistory();
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className="text-primary text-center"> let's Build Quiz</h1>
          <div className="">
            <Link to="/question_list">
              <h2 className=" btn btn-primary "> Create new Quizz</h2>
            </Link>
          </div>
          <Switch>
            <Route exact path="/question_list" component={Question_List} />
            <Route exact path="/question" component={Question} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
