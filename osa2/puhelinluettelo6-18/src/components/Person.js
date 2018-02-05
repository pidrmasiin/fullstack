import React from 'react'


const Person = ({ text, person, handleDelete}) => {
 
  return (
    <tr>
    <td>{person.name} </td>
    <td>{person.number} </td>
    <td><button onClick={handleDelete}>{text}</button></td>
    </tr>
  )
}

export default Person