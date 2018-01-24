import React from 'react'
import ReactDOM from 'react-dom'


  
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
          <button onClick={() => this.setState({ hyvat: this.state.hyvat + 1 })}>
            Hyvä
          </button>
          <button onClick={() => this.setState({ neutraalit: this.state.neutraalit + 1 })}>
            Neutraali
          </button>
          <button onClick={() => this.setState({ huonot: this.state.huonot + 1 })}>
            Huono
          </button>
        </div>
        <div>
        <h2>Statistiikka</h2>
        <p>Hyvät: {this.state.hyvat}</p>
        <p>Neutraalit: {this.state.neutraalit}</p>
        <p>Huonot: {this.state.huonot}</p>
        <p>Keskiarvo: {(this.state.hyvat - this.state.huonot)/ (this.state.huonot + this.state.neutraalit + this.state.hyvat)} </p>
        <p>Positiivisia: {this.state.hyvat / (this.state.huonot + this.state.neutraalit + this.state.hyvat)}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)