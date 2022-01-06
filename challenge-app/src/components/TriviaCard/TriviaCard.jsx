/* eslint-disable */
import React, { useEffect, useState } from 'react'
import ModalTrivia from '../ModalTrivia/ModalTrivia'
import style from './TriviaCard.module.css'

function TriviaCard({level, levels, user, setUsers, setLose, setFinal}) {
  const [isCorrect, setIsCorrect] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currQuestion, setCurrQuestion] = useState(null)
  const [radioActive, setRadioActive] = useState(null)

  useEffect(() => {
    const randomQuestion = level && level.questions[Math.floor(Math.random() * (4 - 0))]
    setCurrQuestion(randomQuestion)
  }, [level])

  let radios = {answer1: false, answer2: false, answer3: false, answer4: false}
  //setea el valor de la respuesta dada
  const handleSelect = (e) => {
    setIsCorrect(e.target.value)
    for(let item in radios) {
      if(e.target.id === item) radios[item] = true
      else radios[item] = false
    }
    setRadioActive(radios)
  }

  //comprobar que se haya seleccionado una respuesta y abrir la ventana de validacion
  const validateQuestion = (e) => {
    e.preventDefault()
    !isCorrect ? alert("Debe seleccionar una respuesta") : setShowModal(true)
  }

  const validateButtonEnabled =() => {
    if(radioActive) {
      const validate = Object.values(radioActive)
      return validate.includes(true)
    }
  }

  console.log(validateButtonEnabled())
  
  
  return (
    <div className={style.container}>
      <div className={style.infoCtn}>
        <h1>{`Ronda ${level && level.level || '' } `}<span>{`/${levels && levels.length}`}</span></h1>
        <h2>{currQuestion && currQuestion.question}</h2>
      </div>
      <form onSubmit={validateQuestion}>
        <div className={style.answersCtn}>
         
          {currQuestion && currQuestion.answers.map((el,i) => (
            <label key={i} htmlFor={`answer${i+1}`} className={(radioActive && radioActive[`answer${i+1}`]) ? style.sRadioActive : style.sRadio} >
              <input type="radio" name="answers" className={style.inputRadio} id={`answer${i+1}`} value={el.is_correct} onChange={handleSelect}  />
              {el.answer}
            </label>
          ))}
        </div>
        <input className={validateButtonEnabled() ? style.btnSubmit: style.btnSubmitDisabled} type="submit" value="Responder" disabled={!validateButtonEnabled()} />
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
          radios={radios}
          setRadioActive={setRadioActive}
        />}
    </div>
  )
}

export default TriviaCard
