import React from 'react'



const Country = ({ country }) => {

 if(country.lenght > 10) {
   return null
 }
  return (
    <li>
   {country}
   </li>
  )
}

export default Country