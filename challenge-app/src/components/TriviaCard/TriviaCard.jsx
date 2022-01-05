import React, { useState } from 'react'

function TriviaCard({level}) {
  const [isCorrect, setIsCorrect] = useState('false')

  const randomNumber = Math.floor(Math.random() * (4 - 0) + 0)
  const randomQuestion = level && level.questions[randomNumber]
  console.log(randomQuestion)

  const handleSelect = (e) => {
    setIsCorrect(e.target.value)
    
  }

  const validateQuestion = (e) => {
    e.preventDefault()
    console.log(isCorrect)
  }
  

  return (
    <div>
      <form onSubmit={validateQuestion}>
        <h2>{randomQuestion && randomQuestion.question}</h2>
        
          {randomQuestion && randomQuestion.answers.map((el,i) => (
            <label key={i} htmlFor={`answer${el.id}`}>
              <input type="radio" name="answers" id={`answer${el.id}`} value={el.is_correct} onChange={handleSelect} />
              {el.answer}
            </label>
          ))}
          <input type="submit" value="Comprobar Respuesta" />
      </form>
    </div>
  )
}

export default TriviaCard
