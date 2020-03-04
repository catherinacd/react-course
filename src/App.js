import React, { Component } from 'react'
import './App.scss'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('contructor')
    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 1982 },
        { name: 'Mazda', year: 1999 }
      ],
      pageTitle: 'React components',
      showCars: false
    }
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

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('render')
    // const pageTitle = this.state.pageTitle
    const cars = this.state.cars

    return (
      <div>
        {/* <h1>{pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <Counter />

        <input type='text' onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>
          Change title
        </button>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        {this.state.showCars &&
          cars.map(({ name, year }, index) => (
            <ErrorBoundary key={index}>
              <Car
                name={name}
                year={year}
                index={index}
                onChangeName={event =>
                  this.onChangeName(event.target.value, index)
                }
                onDelete={this.deleteHandler.bind(this, index)}
              ></Car>
            </ErrorBoundary>
          ))}
      </div>
    )
  }
}
export default App
