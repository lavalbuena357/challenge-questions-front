import React, { useEffect, useState } from 'react'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'
import StartButton from '../StartButton/StartButton'
import style from './Main.module.css'

function Main() {
  const [initialData, setInitialData] = useState([])

  useEffect( async() => { // eslint-disable-line
    const users = await petition(services.getUsers.url)
    setInitialData(users[users.length-1])
  }, [])

  return (
    <div className={style.container}>
      <span className={style.lastPrize}>{`Último premio $${initialData && initialData.accum || 0}`}</span>
      <h2 className={style.subtitle}>Responde las preguntas sin fallar y gana el gran acumulado!</h2>
      <StartButton />
    </div>
  )
}

export default Main
