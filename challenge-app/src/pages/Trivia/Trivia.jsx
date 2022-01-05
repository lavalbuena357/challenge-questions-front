import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import TriviaCard from '../../components/TriviaCard/TriviaCard'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'

function Trivia() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [level, setLevel] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [final, setFinal] = useState(false)
  const [lose, setLose] = useState(false)

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
          <TriviaCard level={level} user={user} setUsers={setUsers} />
        </div>
      }
      <button>Retirarse</button>
      {lose && 
        <Modal 
          title='Qué mal, has perdido...' 
          msg='Lamentablemente te has ido con $0'
          titleBtn='Lo intentaré de nuevo!'
        />
      }
    </div>
  )
}

export default Trivia
