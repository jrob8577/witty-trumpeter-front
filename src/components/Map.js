import React, { Component } from 'react'
import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = 'AIzaSyCHK9oNzGKZNOAFpmaUPtpkCOJ4WVaxdCY'

import '../App.css'

class Map extends Component {
  componentDidMount() {
    this.loadMap( this.props.center )
  }

  componentDidUpdate() {
    this.loadMap( this.props.center )
  }

  loadMap( center ) {
    const element = document.getElementById( "googleMap" )

    GoogleMapsLoader.load( google => {
      const options = {
        center,
        draggable: false,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      new google.maps.Map( element, options )
    })
  }

  render() {
    return (
      <div id="googleMap"></div>
    );
  }
}

export default Map
