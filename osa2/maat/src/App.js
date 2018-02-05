import React from 'react'
import Country from './components/Country'
import countriesService from './services/countries'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: {},
      selected: [],
      search: ''
    }
  }



  componentDidMount() {
    countriesService
      .getAll()
      .then(response => {
        this.setState({ countries: response })
      })
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })

    event.preventDefault()
    const x = this.state.search

    const countryNames = () => this.state.countries.map(one => one.name)
    const maat = countryNames()
   
  
 
    var country = null

    var valitut = []
    for (var i = 0; i < maat.length; i++){
      if(maat[i].includes(x)){
        country = maat[i];
        valitut.push(country)
 
      }
    }
    this.setState({
      country: country,
      selected: valitut

    })

    
 
  }



  

  render() {
    const rivit = () => this.state.selected.map(x => <Country key={x} country={x}/>)
    if(this.state.selected.length > 10){
      this.rivit = () => null
    }
   
    return (
      <div>
        <h1>Maat</h1>
      
          <input 
            value={this.state.search} 
            onChange={this.handleChange}
          /> Etsi
        <br></br>
        {rivit()}
      </div>
    )
  }
}

export default App