import React from 'react'
import { useNavigate } from 'react-router-dom'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'
import style from './StartButton.module.css'

function StartButton() {

  const navigate = useNavigate()

  const createUser = async () => {
    await petition(
      services.addUser.url, 
      services.addUser.method, 
      services.addUser.headers,
      services.addUser.body
    )
    navigate('/trivia/1')
  }

  return (
    <div className={style.buttonCtn}>
      <button onClick={createUser}>Comenzar Juego</button>
    </div>
  )
}

export default StartButton
