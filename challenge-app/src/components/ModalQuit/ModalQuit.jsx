import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveHistory } from '../../utils/saveHistory'

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
    <div>
      <div>
        <h2>¿Está seguro que desea retirtarse??</h2>
        <p>{`Si te retiras podrás llevarte el acumulado hasta el momento: $${user.accum}`}</p>
        <form onSubmit={quitConfirm}>
          <input type="submit" value="Sí, estoy seguro!" />
          <input type="button" value="No, quiero continuar!" onClick={changeAnswer} />
        </form>
      </div>
    </div>
  )
}

export default ModalQuit
