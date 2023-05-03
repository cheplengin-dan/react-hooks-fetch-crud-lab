import React from "react";

function QuestionList({ questions, onDeleteQuestion }) {
  const questionItems = questions.map((question) => (
    <li key={question.id}>
      <h3>{question.prompt}</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={index}
            className={index === question.correctIndex ? "correct" : ""}
          >
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
    </li>
  ));

  return (
    <section>
      <h1>Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
