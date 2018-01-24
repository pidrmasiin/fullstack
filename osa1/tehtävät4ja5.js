import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
    <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto= (props) => {
  const t = props.osat
  const [eka, toka, kolmas] = t
  return (
    <div>
    <p>{eka.nimi}, tehtävia: {eka.tehtavia}</p>
    <p>{toka.nimi}, tehtävia: {toka.tehtavia}</p>
    <p>{kolmas.nimi}, tehtävia: {kolmas.tehtavia}</p>
    </div>
  )
}

const Yhteensa= (props) => {
  const t = props.osat
  const [eka, toka, kolmas] = t
  return (
    <div>
    <p>Tehtäviä yhteensä: {eka.tehtavia + toka.tehtavia + kolmas.tehtavia}</p>
    </div>
  )
}


  
const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  

  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)