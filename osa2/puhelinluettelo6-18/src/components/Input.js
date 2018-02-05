import React from 'react'

const Input = ({text, newName, handleChange}) => {
  return (
              <div>
              {text} <input value={newName}
              onChange={handleChange}/>
              </div>
  )
}

export default Input