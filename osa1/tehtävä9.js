import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ hyvat, huonot, neutraalit}) => {
  const Statistic= ({text, tulos}) => <p>{text}:{tulos}</p>
  if (hyvat + huonot + neutraalit > 0) {
    return(
  <div>
    <h2>Statistiikka</h2>
    <Statistic text="Hyvät" tulos={hyvat}/>
    <Statistic text="Neutraalit" tulos={neutraalit}/>
    <Statistic text="Huonot" tulos={huonot}/>
    <Statistic text="Keskiarvo" tulos={(hyvat - huonot)/ (huonot + neutraalit + hyvat)}/>
    <Statistic text="Positiivisia" tulos={hyvat / (huonot + neutraalit + hyvat)}/>
  </div>
  )
}else{
  return(
    <div>
    <h2>Statistiikka</h2>
    <p>Ei vielä palautetta</p>
    </div>
  )
}
}
  
class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0
  }
}


  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <div>
          <Button handleClick={() => this.setState({ hyvat: this.state.hyvat + 1 })} text="Hyvä"/>
          <Button handleClick={() => this.setState({ neutraalit: this.state.neutraalit + 1 })} text="Neutraali"/>
          <Button handleClick={() => this.setState({ huonot: this.state.huonot + 1 })} text="Huono"/>
          <Statistics hyvat={this.state.hyvat} huonot={this.state.huonot} neutraalit={this.state.neutraalit}/>
        </div>
        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)