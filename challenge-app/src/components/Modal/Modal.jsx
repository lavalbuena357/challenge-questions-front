import React from 'react'
import { useNavigate } from 'react-router-dom'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'

function Modal(props) {

  const navigate = useNavigate()

  const retry = async () => {
    const date = new Date().toISOString();
    const data = {
      date: date,
      userId: props.user.id
    }
    await petition(services.addHistory.url, services.addHistory.method, services.addHistory.headers, data)
    navigate('/')
  }
  
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.msg}</p>
      <button onClick={retry}>{props.titleBtn}</button>
    </div>
  )
}

export default Modal
