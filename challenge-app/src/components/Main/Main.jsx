import React, { useEffect, useState } from 'react'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'
import StartButton from '../StartButton/StartButton'

function Main() {
  const [initialData, setInitialData] = useState([])

  useEffect( async() => {
    const users = await petition(services.getUsers.url)
    setInitialData(users[users.length-1])
  }, [])

  return (
    <div>
      <span>{`Último premio $${initialData && initialData.accum}`}</span>
      <h2>Responde las preguntas sin fallar y gana el gran acumulado!</h2>
      <StartButton />
    </div>
  )
}

export default Main
