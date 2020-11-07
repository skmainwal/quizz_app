import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  question: [
    {
      id: 1,
      text: "what is your name ?",
      choices: [
        {
          id: "ch_1",
          text: "option1",
        },
        {
          id: "ch_2",
          text: "option2",
        },
        {
          id: "ch_3",
          text: "option3",
        },
        {
          id: "ch_4",
          text: "option4",
        },
      ],
      correct: "",
    },
  ],
  new_question: "",
  opt: [],
};

export const addQuestionAction = (question) => ({
  type: "ADD_QUESTION",
  payload: question,
});

export const addOptionAction = (option) => ({
  type: "ADD_OPTION",
  payload: option,
});

export const addQuestionText = (text) => ({
  type: "ADD_QUESTION_TEXT",
  payload: text,
});
export const addOptionList = (arr) => ({
  type: "ADD_OPTION_LIST",
  payload: arr,
});

export const add_text_ChoiceToQuestion = (question) => ({
  type: "ADD_NEW_QUESTION",
  payload: question,
});

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        new_question: action.payload,
      };

    case "ADD_OPTION":
      return {
        ...state,
        opt: [...state.opt, action.payload],
      };

    case "ADD_OPTION_LIST":
      return {
        ...state,
        new_question: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(myReducer, composeWithDevTools());

export default store;
