import React, {useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

const [questions, setQuestions] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  })

  const questions1 = questions.map((question) => {
    return (
      <QuestionItem key={question.id} question={question}/>
    )

  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions1}</ul>
    </section>
  );
}

export default QuestionList;
