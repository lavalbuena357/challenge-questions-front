import React, { useEffect, useState } from 'react'
import TriviaCard from '../../components/TriviaCard/TriviaCard'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'

function Trivia() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [level, setLevel] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => { // eslint-disable-line
    setUsers(await petition(services.getUsers.url))
  }, [])

  //cargar datos de usuario y llamado a la api del nivel
  useEffect(async () => { // eslint-disable-line
    setUser(users[users.length-1])
    const petitioLevels = await petition(services.getLevels.url)
    const currentLevel = await petitioLevels.filter(el => el.level === (users[users.length-1] && users[users.length-1].level_reached))
    setLevel(currentLevel[0])
    setIsLoading(false)
  }, [users])

  return (
    <div>
      {isLoading ?
        <p>Cargando...</p>
        : 
        <div>
          <h1>{`Nivel ${level && level.level } `}</h1>
          <div>
            <span>{`Acumulado: $${user && user.accum}`}</span>
            <span>{`Premio a ganar: $${level && level.prize.points}`}</span>
          </div>
          <TriviaCard level={level} />
        </div>
      }
    </div>
  )
}

export default Trivia
