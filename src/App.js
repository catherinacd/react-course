import React, { Component } from 'react'
import Car from './Car/Car'
class App extends Component {
  state = {
    cars: [{ name: '', year: '' }]
  }

  render() {
    return (
      <div>
        <h1>Hello Kate!</h1>
        <Car name={'Audi'} year={2016}>
          color
        </Car>
      </div>
    )
  }
}
export default App
