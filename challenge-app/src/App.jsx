import React from 'react'
import { Routes, Route } from "react-router-dom"
import Main from './components/Main/Main';

function App() {

  return (
    <div>
      <h1>Trivia App</h1>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
