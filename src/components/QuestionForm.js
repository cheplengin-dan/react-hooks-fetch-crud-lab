import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.name === "answers"
          ? [
              ...formData.answers.slice(0, +event.target.id),
              event.target.value,
              ...formData.answers.slice(+event.target.id + 1),
            ]
          : event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddQuestion(formData);
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  }

  const answerInputs = formData.answers.map((answer, index) => (
    <label key={index}>
      Answer {index + 1}:
      <input
        type="text"
        name="answers"
        id={index}
        value={answer}
        onChange={handleChange}
      />
    </label>
  ));

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        {answerInputs}
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {formData.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer} </option>
        ))}
      </select>
    </label>
    <button type="submit">Add Question</button>
  </form>
</section>

);
}

export default QuestionForm;