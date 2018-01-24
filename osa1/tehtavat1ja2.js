import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
    <h1>{props.kurssi}</h1>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
    <p>{props.nimi}, tehtäviä: {props.tehtavat}</p>
    </div>
  )
}

const Sisalto= (props) => {
  return (
    <div>
    <Osa nimi='Reactin perusteet' tehtavat = {props.eka} />
    <Osa nimi='Tiedonvälitys propseilla' tehtavat = {props.toka} />
    <Osa nimi='Komponenttien tila' tehtavat = {props.kolmas}/>
    </div>
  )
}

const Yhteensa= (props) => {
  return (
    <div>
    <p>Yhteensä {props.eka + props.toka + props.kolmas}</p>
    </div>
  )
}


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const tehtavia1 = 10
  const tehtavia2 = 7
  const tehtavia3 = 14
  
  

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto eka={tehtavia1} toka={tehtavia2} kolmas={tehtavia3}/>
      <Yhteensa eka={tehtavia1} toka={tehtavia2} kolmas={tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)