import React, { Component } from 'react'

class Car extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log('Car componentWillReceiveProps ', nextProps)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Car componentWillUpdate', nextProps, nextState)
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState)
  //   return prevState
  // }

  componentDidUpdate() {
    console.log('Car componentDidUpdate')
  }

  getSnapshotBeforeUpdate() {
    console.log('Car getSnapshotBeforeUpdate')
  }

  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }
  render() {
    console.log('Car render')
    return (
      <div
        style={{
          border: '1px solid #ccc',
          marginBottom: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          type='text'
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}
export default Car
