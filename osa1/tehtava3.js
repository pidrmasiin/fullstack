import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
    <h1>{props.kurssi}</h1>
    </div>
  )
}

const Yhteensa= (p1, p2, p3) => {
  return p1 + p2 + p3
}


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
  

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <p>{osa1.nimi}, tehtäviä:{osa1.tehtavia}</p>
      <p>{osa2.nimi}, tehtäviä:{osa2.tehtavia}</p>
      <p>{osa3.nimi}, tehtäviä:{osa3.tehtavia}</p>
      <p>Yhteensä: {Yhteensa(osa1.tehtavia, osa2.tehtavia, osa3.tehtavia)}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)