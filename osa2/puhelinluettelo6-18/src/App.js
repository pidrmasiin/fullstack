import React from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Input from './components/Input'
import personService from './services/persons'
import Notification from './components/Notification';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
        newName: '',
        newNumber: '',
        filter: '',
        filteredPersons: [],
        message: null
      }
    }
  
    componentDidMount() {
      personService
        .getAll()
        .then(response => {
          this.setState({persons : response })
        })
    }

    addName = (event) => {
      event.preventDefault()
      const names = this.state.persons.map(person => person.name)
      if(!names.includes(this.state.newName)){
        this.setState({
          message: this.state.newName +' lisättiin luetteloon'
        })
        const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }
  
      personService
        .create(personObject)
        .then(response => {
          this.componentDidMount()
          this.setState({
            newName: '',
            newNumber: ''
          })
        })
        .then(message => {
          if(this.state.message !== null){
          setTimeout(() => {
            this.setState({
              message: null
            })
          }, 5000)
        }})
    }else{
      this.setState({
        message: 'Tämän niminen henkilö on jo puhelinluettelossa'
      })
      setTimeout(() => {
          this.setState({
            message: null
          })
        }, 5000)
      }
    }
  

    updateNumber= (person) => {
      return() => {
        if(!this.state.persons.includes(person.id)){
        this.setState({
          message: person.name + ': numero muutettiin'
        })
        person.number = this.state.newNumber
        personService
        .update(person.id, person)
        .then(response => {
          this.componentDidMount()
          this.setState({
            newName: '',
            newNumber: ''
          })
        })
        .then(message => {
          setTimeout(() => {
            this.setState({
              message: null
            })
          }, 5000)
        })
      } 
    }
  }
  
    handleNameChange = (event) => {
      this.setState({ newName: event.target.value })
    }
  
    handleNumberChange = (event) => {
      this.setState({ newNumber: event.target.value })
    }
  
    handleFilterChange = (event) => {
      event.preventDefault()
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

    handleDelete = (person) => {
      return() => {
    
      personService
        .deleteOne(person)
        .then(response => {
          this.componentDidMount()
          var persons = this.state.persons
          this.setState({
            persons: persons,
            message: person.name + ' poistettiin luettelosta'
          })
        })
        .then(message => {
          setTimeout(() => {
            this.setState({
              message: null
            })
          }, 5000)
        })
       
      }
    }

    
  
    render() {
      
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <Notification message={this.state.message}/>
          <div>
            <div>
               <Input text={'Etsi numero nimen perusteella:'} newName={this.state.filter}
              handleChange={this.handleFilterChange}/>
              <Input text={'Uusi numero'} newName={this.state.newNumber}
              handleChange={this.handleNumberChange}/>
            </div>
          <table cellSpacing="10">
            <tbody>
              <tr>
                <th>Nimi</th>
                <th>Numero</th>
              </tr>
            {this.state.filteredPersons.map(filteredPersons => 
            <Person key={filteredPersons.name} text={'Muuta numeroa'} person={filteredPersons} 
            handleDelete = {this.updateNumber(filteredPersons)}/>)}
           
            </tbody>
          </table>
          </div>
          <div>
          <h2>Lisää nimi ja numero</h2>
          <Form  newName={this.state.newName} newNumber={this.state.newNumber}
           handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange}
           onSubmit={this.addName}/>
         
            
          </div>
          <h2>Kaikki numerot</h2>
          <table cellSpacing="10">
            <tbody>
          <tr>
          <th>Nimi</th>
          <th>Numero</th>
          </tr>
          
            {this.state.persons.map(persons => <Person key={persons.name} text={'Poista'}person={persons} handleDelete={this.handleDelete(persons)}/>)}

          </tbody>
          </table>
        </div>
        
      )
    }
  }
  
  export default App
