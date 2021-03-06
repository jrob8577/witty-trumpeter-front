import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import Map from './components/Map'
import { API } from './components/api'

const DEFAULT_ZIP = '94607'
const DEFAULT_CENTER = { lat: 37.8044444, lng: -122.2697222 }

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = { theaters: [] }
  }

  componentDidMount() {
    this.zipCodeEntered( DEFAULT_ZIP )
  }

  zipCodeEntered( zipCode ) {
    fetch( `${API}/theater/list/${zipCode}`, { mode: 'cors' } )
      .then( response => response.json() )
      .then( theaters => {
        fetch( `//maps.googleapis.com/maps/api/geocode/json?address=${ zipCode }`, { mode: 'cors' } )
          .then( response => response.json() )
          .then( geocodeInfo => {
            const center = (( geocodeInfo.results[ 0 ] || {} ).geometry || {} ).location || DEFAULT_CENTER

            this.setState({ zipCode, theaters, center })
          })
      })
      .catch( error => console.log( error ))
  }

  render() {
    return (
      <div>
        <Header zipCode={this.state.zip}
          zipCodeEntered={this.zipCodeEntered.bind(this)} />
        <Map {...this.state} />
      </div>
    )
  }
}

export default App
