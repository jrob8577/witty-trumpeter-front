import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'

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

      const { theaters } = this.props

      theaters.forEach( theater => {
        const info = new google.maps.InfoWindow({
          content: ReactDOMServer.renderToString( <InfoWindow {...theater} /> )
        })

        const marker = new google.maps.Marker({
          map,
          title: theater.name,
          position: theater.coordinates
        })

        marker.addListener( 'click', () => info.open( map, marker ))
      })
    })
  }

  render() {
    return (
      <div id="googleMap"></div>
    );
  }
}

export default Map
