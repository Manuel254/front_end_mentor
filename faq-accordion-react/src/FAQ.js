import React, { useState } from "react";
import arrow from "./images/icon-arrow-down.svg";
import { data } from "./data";

const FAQ = () => {
  const [questions, showQuestions] = useState(data);
  return (
    <>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </>
  );
};

const Question = ({ q, a }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="questions">
        {show ? (
          <p className="p-question" style={{ fontWeight: "bold" }}>
            {q}
          </p>
        ) : (
          <p className="p-question">{q}</p>
        )}
        <button type="button" className="btn" onClick={() => setShow(!show)}>
          {show ? (
            <img
              style={{ transform: "rotate(180deg)" }}
              src={arrow}
              alt="arrow up"
            />
          ) : (
            <img src={arrow} alt="arrow down" />
          )}
        </button>
      </div>
      {show && <p className="p-ans">{a}</p>}
      <hr />
    </>
  );
};

export default FAQ;
