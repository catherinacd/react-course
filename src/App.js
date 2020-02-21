import React, { Component } from 'react'
import './App.scss'
import Car from './Car/Car'
class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: '2018' },
      { name: 'Audi', year: '1982' },
      { name: 'Mazda', year: '1999' }
    ],
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  handleInput = event => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }
  deleteHandler(index) {
    const cars = [...this.state.cars]

    cars.splice(index, 1)

    this.setState({
      cars
    })
  }

  render() {
    const pageTitle = this.state.pageTitle
    const cars = this.state.cars

    return (
      <div>
        <h1>{pageTitle}</h1>

        <input type='text' onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>
          Change title
        </button>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        {this.state.showCars &&
          cars.map(({ name, year }, index) => (
            <Car
              key={index}
              name={name}
              year={year}
              onChangeName={event =>
                this.onChangeName(event.target.value, index)
              }
              onDelete={this.deleteHandler.bind(this, index)}
            ></Car>
          ))}
      </div>
    )
  }
}
export default App
