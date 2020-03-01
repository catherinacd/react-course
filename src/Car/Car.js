import React, { Component } from 'react'
import withClass from './../hoc/withClass'
import './Car.scss'

class Car extends Component {
  render() {
    return (
      <>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          type='text'
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    )
  }
}
export default withClass(Car, 'car')
