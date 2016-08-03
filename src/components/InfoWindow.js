import React, { Component } from 'react'
import { Link } from 'react-router'


class InfoWindow extends Component {
  render() {
    return ( 
    	<div className="theater-window">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>

        <button key={this.props.id}>
          <Link to={`/theater-details/${this.props.id}`}>Showtimes</Link>
        </button>

      </div> 
    )
  }
}

export default InfoWindow