import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveHistory } from '../../utils/saveHistory'
import style from './ModalQuit.module.css'

function ModalQuit({setQuitShowModal, user}) {

  const navigate = useNavigate()

  //confirmacion de retirada
  const quitConfirm = async (e) => {
    e.preventDefault()
    await saveHistory(user.id)    
    setQuitShowModal(false)
    navigate('/')
  }

  //funcion para continuar
  const changeAnswer = () => {
    setQuitShowModal(false)
  }

  return (
    <div className={style.container}>
      <div className={style.triviaCtn}>
        <form onSubmit={quitConfirm}>
          <h2>¿Está seguro que desea retirarse?</h2>
          <p>{`Si te retiras podrás llevarte el acumulado hasta el momento: $${user.accum}`}</p>
          <input type="submit" value="Sí, estoy seguro!" />
          <input type="button" value="No, quiero continuar!" onClick={changeAnswer} />
        </form>
      </div>
    </div>
  )
}

export default ModalQuit
