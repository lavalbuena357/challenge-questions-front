import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveHistory } from '../../utils/saveHistory'
import { userUpdate } from '../../utils/userUpdate'

function ModalTrivia({setShowModal, isCorrect, user, level, setUsers, setLose, setFinal, radios, setRadioActive}) {

  const navigate = useNavigate()

  //validacion de respuesta
  const continueValidate = async (e) => {
    e.preventDefault()
    if(isCorrect === "true") {
      radios = {answer1: false, answer2: false, answer3: false, answer4: false}
      setRadioActive(radios)
      await userUpdate(user, level, setUsers)

      //valida si el juego ya terminó
      if(user.level_reached >= 5) {
        await saveHistory(user.id)
        setFinal(true)
      } 
      else {
        navigate(`/trivia/${level.level + 1}`)
      }
      //si pierde se setea el estado y se guarda el historial
    } else {
      setLose(true)
      await saveHistory(user.id)
    }
    setShowModal(false)
  }

  //funcion para cambiar la respuesta
  const changeAnswer = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div>
        <h2>¿Está seguro de su respuesta?</h2>
        <form onSubmit={continueValidate}>
          <input type="submit" value="Sí, estoy seguro!" />
          <input type="button" value="No, cambiar mi respuesta" onClick={changeAnswer} />
        </form>
      </div>
    </div>
  )
}

export default ModalTrivia
