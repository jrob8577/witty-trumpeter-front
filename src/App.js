import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <span>
        <Header />
        <Map />
      </span>
    )
  }
}

export default App
