import React from 'react'
import { useNavigate } from 'react-router-dom'
import { petition } from '../../utils/petitions'
import { services } from '../../utils/services'

function Modal(props) {

  const navigate = useNavigate()

  const retry = async (url) => {
    navigate(url)
    props.setVictory(false)
  }
  
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.msg}</p>
      <button onClick={() => retry(props.url)}>{props.titleBtn}</button>
    </div>
  )
}

export default Modal
