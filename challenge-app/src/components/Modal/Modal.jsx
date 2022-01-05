import React from 'react'
import { useNavigate } from 'react-router-dom'

function Modal(props) {

  const navigate = useNavigate()

  const retry = async () => {
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
