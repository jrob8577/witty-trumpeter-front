import React, { Component } from 'react'

class InfoWindow extends Component {
  onClick( event ) {
    event.preventDefault()

    this.props.history.push( `/theater-details/${this.props.id}` )
  }

  render() {
    return (
    	<div className="theater-window">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>
        <a href="#" onClick={this.onClick.bind(this)}>Showtimes</a>
      </div>
    )
  }
}

export default InfoWindow
