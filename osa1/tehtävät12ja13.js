import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  asetaArvoon = () => {
    this.setState({ selected: Math.floor(Math.random() * 6) })
  }

  vote = (arvo) => {
    const kopio = this.state.pisteet
    kopio[arvo] += 1 
    this.setState({ pisteet: kopio })
    console.log(this.state.pisteet.indexOf["3"])
  }

  getIndex = () => {
    return(this.state.pisteet.indexOf[3])
  }


  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <Button handleClick={() => this.asetaArvoon()} text="Next anecdote"/>
        <Button handleClick={() => this.vote(this.state.selected)} text="vote"/>
        <br></br>

        <p>Anecdote with most votes: {Math.max.apply(null, this.state.pisteet)}</p>
        <p>{this.props.anecdotes[0]}</p>
        <br></br>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)