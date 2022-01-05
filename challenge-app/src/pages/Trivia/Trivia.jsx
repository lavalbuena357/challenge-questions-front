import React, { useEffect, useState } from 'react'
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

  useEffect(async () => { // eslint-disable-line
    setUser(users[users.length-1])
    setLevel(await petition(services.getLevels.url+`/${users[users.length-1] && users[users.length-1].level_reached}`))
    setIsLoading(false)
  }, [users])

  return (
    <div>
      {isLoading ?
        <p>Cargando...</p>
        : 
        <h1>{`Nivel ${level[0] && level[0].level}`}</h1>
      }
    </div>
  )
}

export default Trivia
