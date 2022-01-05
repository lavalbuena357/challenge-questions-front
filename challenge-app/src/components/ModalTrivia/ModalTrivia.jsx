import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'

function ModalTrivia({setShowModal, isCorrect, user, level, setUsers, setVictory}) {

  const navigate = useNavigate()

  const userUpdate = async () => {
    const data = {
      ...user, 
      accum: user.accum + level.prize.points,
      level_reached: user.level_reached >= 5 ? user.level_reached : user.level_reached+1
    }
    await petition(services.updatedUser.url+`/${user.id}`, services.updatedUser.method, services.updatedUser.headers, data)
    setUsers(await petition(services.getUsers.url))
  }

  const continueValidate = async () => {
    if(isCorrect === "true") {
      setVictory(true)
      await userUpdate()
      navigate(`/trivia/${level.level + 1}`)
    } else {
      setVictory(false)
    }
    setShowModal(false)
  }

  const changeAnswer = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div>
        <h2>¿Está seguro de su respuesta?</h2>
        <div>
          <button onClick={continueValidate}>Sí, estoy seguro!</button>
          <button onClick={changeAnswer}>No, cambiar mi respuesta</button>
        </div>
      </div>
    </div>
  )
}

export default ModalTrivia
