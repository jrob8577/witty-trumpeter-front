import React, { Component } from 'react'
import '../App.css'

class Map extends Component {
  componentDidMount() {

    const initialize = () => {
      var mapProp = {
        center: new google.maps.LatLng(37.8044444,-122.2697222),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }

  render() {
    return (
      <div id="googleMap"></div>
    );
  }
}

export default Map
