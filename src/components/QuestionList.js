import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onDelete, questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem onDelete={onDelete} key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
