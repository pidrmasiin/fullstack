import React from 'react'
import Input from './Input'



const Form = ({ newName, newNumber, handleNameChange, handleNumberChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
              <div>
              <Input text={'nimi:'} newName={newName}
              handleChange={handleNameChange}/>
              </div>
              <div>
                <Input text={'numero:'} newName={newNumber}
              handleChange={handleNumberChange}/>
              </div>
            <button type="submit">tallenna</button>
    </form>
  )
}

export default Form