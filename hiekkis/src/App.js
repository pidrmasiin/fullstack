import React from 'react'
import Kurssit from './components/Kurssit'

const App = ({ kurssit }) => {
  
  return (
    <div>
      <ul>
      <h1>Opetusohjelma</h1>
        {kurssit.map(kurssit => <Kurssit key={kurssit.id} kurssit={kurssit} />)}
      </ul>
      
    </div>
  )
}

export default App

