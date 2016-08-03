import React, { Component } from 'react'
import 'react-router'


class TheaterDetails extends Component {
  componentDidMount() {
    this.setState({
      theater: findUserById(this.props.params.theaterId)
    })
  }

  render() {
    return (
       <div>
        <h2>{this.state.theater.theaterId}</h2>
      </div>
    )
  }
}

export default TheaterDetails