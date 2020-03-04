import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withClass from './../hoc/withClass'
import './Car.scss'

class Car extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 0) this.inputRef.current.focus()
  }

  render() {
    return (
      <>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          type='text'
          ref={this.inputRef}
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, 'car')
