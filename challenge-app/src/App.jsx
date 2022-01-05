import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Main from './components/Main/Main'
import Trivia from './pages/Trivia/Trivia'
import History from './pages/History/History'
import './App.css'

function App() {

  return (
    <div>
      <div className='header_ctn'>
        <h1>Trivia App</h1>
        <div className='links_ctn'>
          <Link to={'/'}>
            Inicio
          </Link>
          <Link to='/history' >
            Historial de partidas
          </Link>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/trivia/:level_reached' element={<Trivia />} />
        <Route path='/history' element={<History />}/>
      </Routes>
    </div>
  );
}

export default App;
