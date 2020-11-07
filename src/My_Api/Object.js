import React from "react";
import shortid from "shortid";

function Object() {
  return {
    question: {
      id: shortid.generate(),
      text: "",
      choices: [{ id: shortid.generate(), text: "" }],
    },
  };
}

export default Object;
