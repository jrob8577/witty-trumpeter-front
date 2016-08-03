import React, { Component } from 'react'

class InfoWindow extends Component {
  render() {
    return ( 
    	<div className="theater-window">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>
        <button>Showtimes</button>
      </div> 
    )
  }
}

export default InfoWindow