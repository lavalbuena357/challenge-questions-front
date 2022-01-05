import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Main from './components/Main/Main'
import Trivia from './pages/Trivia/Trivia'
import History from './pages/History/History'

function App() {

  return (
    <div>
      <h1>Trivia App</h1>
      <Link to={'/'}>
        Inicio
      </Link>
      <Link to='/history' >
        Historial de partidas
      </Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/trivia/:level_reached' element={<Trivia />} />
        <Route path='/history' element={<History />}/>
      </Routes>
    </div>
  );
}

export default App;
