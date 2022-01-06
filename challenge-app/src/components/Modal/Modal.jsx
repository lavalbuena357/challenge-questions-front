import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Modal.module.css'

function Modal(props) {

  const navigate = useNavigate()

  const retry = async () => {
    navigate('/')
  }
  
  return (
    <div className={style.container}>
      <div className={style.triviaCtn}>
        <div className={style.triviaBox}>
          <h2>{props.title}</h2>
          <p>{props.msg}</p>
          <button onClick={retry}>{props.titleBtn}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
