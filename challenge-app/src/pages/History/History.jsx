import React, { useEffect, useState } from 'react'
import {petition} from '../../utils/petitions'
import { services } from '../../utils/services'
import style from './History.module.css'

function History() {
  const [history, setHistory] = useState([])

  useEffect(async () => { // eslint-disable-line
    const gethistory = await petition(services.getHistory.url, services.getHistory.method)
    setHistory(gethistory)
  }, [])

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Máximo nivel</th>
          <th>Premio Ganado</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 && history.map((el, i) => (
            <tr key={i}>
              <td>{el.id}</td>
              <td>{el.date.split('T')[0]}</td>
              <td>{el.user.name}</td>
              <td>{el.user.level_reached}</td>
              <td>{el.user.accum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default History
