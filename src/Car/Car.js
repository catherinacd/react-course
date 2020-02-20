import React from 'react'

const Car = ({ name, year, onChangeName, onDelete }) => (
  <div
    style={{
      border: '1px solid #ccc',
      marginBottom: '10px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <h3>Car name: {name}</h3>
    <p>Year: {year}</p>
    <input type='text' onChange={onChangeName} value={name} />
    <button onClick={onDelete}>Delete</button>
  </div>
)

export default Car
