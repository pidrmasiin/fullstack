import React from 'react'



const Country = ({ country },  {length} ) => {
  console.log(length)
 if(length > 10) {
   return null
 }
  return (
    <li>
   {country}
   </li>
  )
}

export default Country