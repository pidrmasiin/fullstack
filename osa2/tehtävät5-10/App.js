import React from 'react';
import Person from './components/Note.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: '',
      filteredPersons: []

    }
  }
   

  addName = (event) => {
    event.preventDefault()
    const names = this.state.persons.map(person => person.name)
    console.log(names)
    if(!names.includes(this.state.newName)){
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    console.log('nappia painettu')
    console.log(event.target)

    const persons = this.state.persons.concat(personObject)
  
    this.setState({
    persons: persons,
    newName: ''
  })
  }

  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
    const filter = this.state.filter
    
    var persons = this.state.persons;
    var filteredPersons = []
    for (var i = 0; i < persons.length; i++){
      if(persons[i].name.includes(filter)){
        filteredPersons.push(persons[i])
      }
    }

    this.setState({
      filteredPersons: filteredPersons
    })
  }


 

  render() {
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          <div>
            Etsi numero nimen perusteella: <input value={this.state.filter}
            onChange={this.handleFilterChange}/>
          </div>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>Nimi</th>
              <th>Numero</th>
            </tr>
          {this.state.filteredPersons.map(filteredPersons => <Person key={filteredPersons.name} person={filteredPersons}/>)}
          </tbody>
        </table>
        </div>
        <div>
        <h2>Lisää nimi ja numero</h2>
        <form onSubmit={this.addName}>
            <div>
            nimi: <input value={this.state.newName}
            onChange={this.handleNameChange}/>
            </div>
            <div>
              numero: <input value={this.state.newNumber}
              onChange={this.handleNumberChange}/>
            </div>
          <button type="submit">tallenna</button>
          </form>
        </div>
        <h2>Kaikki numerot</h2>
        <table cellSpacing="10">
          <tbody>
        <tr>
        <th>Nimi</th>
        <th>Numero</th>
        </tr>
        
          {this.state.persons.map(persons => <Person key={persons.name} person={persons} />)}
       
        </tbody>
        </table>
      </div>
      
    )
  }
}

export default App