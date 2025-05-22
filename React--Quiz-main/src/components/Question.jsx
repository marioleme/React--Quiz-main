import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

import "./question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    console.log('test', option)
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    })

  }

  return (
    <div id="question">
      <p>
        Perguntas {quizState.currentQuestion + 1} de
        {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="option-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}/>
        ))}
      </div>

      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
