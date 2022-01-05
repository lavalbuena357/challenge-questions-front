import React, { useEffect, useState } from 'react'
import ModalTrivia from '../ModalTrivia/ModalTrivia'

function TriviaCard({level, user, setUsers, setLose, setFinal}) {
  const [isCorrect, setIsCorrect] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currQuestion, setCurrQuestion] = useState(null)

  useEffect(() => {
    const randomQuestion = level && level.questions[Math.floor(Math.random() * (4 - 0))]
    setCurrQuestion(randomQuestion)
  }, [level])

  //setea el valor de la respuesta dada
  const handleSelect = (e) => {
    setIsCorrect(e.target.value)
  }

  //comprobar que se haya seleccionado una respuesta y abrir la ventana de validacion
  const validateQuestion = (e) => {
    e.preventDefault()
    !isCorrect ? alert("Debe seleccionar una respuesta") : setShowModal(true)
  }
  

  return (
    <div>
      <form onSubmit={validateQuestion}>
        <h2>{currQuestion && currQuestion.question}</h2>
          {currQuestion && currQuestion.answers.map((el,i) => (
            <label key={i} htmlFor={`answer${el.id}`}>
              <input type="radio" name="answers" id={`answer${el.id}`} value={el.is_correct} onChange={handleSelect} />
              {el.answer}
            </label>
          ))}
          <input type="submit" value="Comprobar Respuesta" />
      </form>

      {/* MODAL TRIVIA */}
      {showModal && 
        <ModalTrivia 
          setShowModal={setShowModal} 
          isCorrect={isCorrect} 
          user={user} 
          level={level}
          setUsers={setUsers}
          setLose={setLose}
          setFinal={setFinal}
        />}
    </div>
  )
}

export default TriviaCard
