import React from 'react'

const Car = ({ name, year, children }) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>Year: {year}</p>
    {children}
  </div>
)

export default Car
