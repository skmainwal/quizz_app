import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  question: [],
  question_text: "",
  opt: [],
  correctAns: [],
  marks: 0,
};

// *****************  All Action Used  **********************

export const addQuestionAction = (question) => ({
  type: "ADD_QUESTION",
  payload: question,
});

// adding every option one by one
export const addOptionAction = (option) => ({
  type: "ADD_OPTION",
  payload: option,
});

// for adding question title text
export const addQuestionText = (text) => ({
  type: "ADD_QUESTION_TEXT",
  payload: text,
});

// doing empty question_text store after submitting one question to question list
export const clearTextStore = () => ({
  type: "CLEAR_TEXT",
  // payload: text,
});

// for clearing option store
export const clearOptStore = () => ({
  type: "CLEAR_OPTION",
});

// to update opt store
export const updateOpt = (optstate) => ({
  type: "UPDATE_OPT",
  payload: optstate,
});

//to Add correct ans in array
export const AddCorrectAns = (arr) => ({
  type: "CORRECT_ANS",
  payload: arr,
});

//  for adding marks
export const addMarks = (mark) => ({
  type: "ADD_MARKS",
  payload: mark,
});

// **************************   All Reducer Used ***************************
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        question: [...state.question, action.payload],
      };

    case "ADD_OPTION":
      return {
        ...state,
        opt: [...state.opt, action.payload],
      };

    case "ADD_QUESTION_TEXT":
      return {
        ...state,
        question_text: action.payload,
      };

    case "CLEAR_TEXT":
      return {
        ...state,
        question_text: "",
      };
    case "CLEAR_OPTION":
      return {
        ...state,
        opt: [],
      };
    case "UPDATE_OPT":
      return {
        ...state,
        opt: action.payload,
      };
    case "CORRECT_ANS":
      return {
        ...state,
        correctAns: [...state.correctAns, action.payload],
      };
    case "ADD_MARK":
      return {
        ...state,
        marks: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(myReducer, composeWithDevTools());

export default store;
