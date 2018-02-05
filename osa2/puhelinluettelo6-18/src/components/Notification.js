 import React from 'react'
 



const Notification = ( {message} ) => {
  const divStyle = {
    color: 'blue',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
};

  if (message === null) {
  return null
  }else {
  return (
    <div style={divStyle}>
    {message}
    </div>
  )
}
}
export default Notification