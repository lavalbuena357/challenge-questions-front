/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Modal from '../../components/Modal/Modal'
import ModalQuit from '../../components/ModalQuit/ModalQuit'
import TriviaCard from '../../components/TriviaCard/TriviaCard'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'
import style from './Trivia.module.css'

function Trivia() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [level, setLevel] = useState(null)
  const [levels, setLevels] = useState([])
  const [final, setFinal] = useState(false)
  const [lose, setLose] = useState(false)
  const [showQuitModal, setQuitShowModal] = useState(false)

  const { level_reached } = useParams()  

  useEffect(async () => { 
    setUsers(await petition(services.getUsers.url))
    setLevels(await petition(services.getLevels.url))
  }, [level_reached])

  //cargar datos de usuario y llamado a la api del nivel
  useEffect(async () => { 
    setUser(users[users.length-1])
    const petitioLevels = await petition(`${services.getLevels.url}/${level_reached}`)
    setLevel(await petitioLevels[0])
  }, [users])

  return (
    <div className={style.container}>
      <div className={style.infoCtn}>
        <div className={style.prizeCtn}>
          <span>{`Acumulado: $${user && user.accum}`}</span>
          <span>{`Premio a ganar: $${level && level.prize && level.prize.points ||''}`}</span>
        </div>
        {!final && <button onClick={() => setQuitShowModal(true)}>Retirarse</button>}
      </div>
      <TriviaCard level={level} user={user} setUsers={setUsers} setLose={setLose} setFinal={setFinal} levels={levels} />

      {/* MODALES */}
      {lose && 
        <Modal 
          title='Qué mal, has perdido...' 
          msg='Lo has perdido todo, lamentablemente te vas con $0'
          titleBtn='Lo intentaré de nuevo!'
        />
      }
      {final &&
        <Modal 
          title='FELICIDADES, has ganado!' 
          msg={`Te llevas el premio mayor de $${user.accum}`}
          titleBtn='Terminar'
        />
      }

      {showQuitModal &&
        <ModalQuit setQuitShowModal={setQuitShowModal} user={user} />
      }
    </div>
  )
}

export default Trivia
