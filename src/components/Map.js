import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = 'AIzaSyCHK9oNzGKZNOAFpmaUPtpkCOJ4WVaxdCY'

import InfoWindow from './InfoWindow'
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
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      const map = new google.maps.Map( element, options )

      google.maps.event.addDomListener( element, 'resize', () => {
        map.setCenter( center )
      })

      const { theaters } = this.props

      const createMarker = theater => {
        const marker = new google.maps.Marker({
          map,
          id: theater.id,
          title: theater.name,
          position: theater.coordinates
        })

        const info = new google.maps.InfoWindow()

        const div = document.createElement( 'div' )
        ReactDOM.render( <InfoWindow {...theater} />, div )
        info.setContent( div )

        marker.addListener( 'click', () => info.open( map, marker ))
      }

      theaters.forEach( createMarker.bind( this ))
    })
  }

  render() {
    return (
      <div id="googleMap"></div>
    );
  }
}

export default Map
