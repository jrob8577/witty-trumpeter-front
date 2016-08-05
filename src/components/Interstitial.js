import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Interstitial extends Component {
  componentWillMount() {
    const favorite = window.localStorage.movieNerd

    if( favorite ) {
      browserHistory.push( `/theater-details/${favorite}` )
    } else {
      browserHistory.push( '/map' )
    }
  }

  render() {
    return <div></div>
  }
}