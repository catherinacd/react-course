import React, { Component } from 'react'
import Car from './Car/Car'
class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: '2018' },
      { name: 'Audi', year: '1982' },
      { name: 'Mazda', year: '1999' }
    ],
    pageTitle: 'React components'
  }

  render() {
    const pageTitle = this.state.pageTitle
    const cars = this.state.cars

    return (
      <div>
        <h1>{pageTitle}</h1>
        {cars.map(({ name, year }, index) => (
          <Car name={name} year={year} key={index}></Car>
        ))}
      </div>
    )
  }
}
export default App
