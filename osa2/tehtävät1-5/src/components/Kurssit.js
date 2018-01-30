import React from 'react'
import Osat from './Osat'



const Kurssit = ({ kurssit }) => {
  var osat = kurssit.osat
  var tehtavat = osat.map(osa => osa.tehtavia) 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <div>
    <h2>{kurssit.nimi}</h2>
    <ul>
        {osat.map(osat => <Osat key={osat.id} osat={osat} />)}
        <p>Yhteensä: {tehtavat.reduce(reducer)} tehtävää </p>
    </ul>
    </div>
  )
}

export default Kurssit

