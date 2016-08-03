import React, { Component } from 'react'
import 'react-router'

const API = 'http://localhost:4000'

class TheaterDetails extends Component {
  componentDidMount() {
    this.setState({
      theaterId: this.props.params.theaterId
    })

    // fetch( `${API}/theater/${  }`, { mode: 'cors' } )
    //   .then( response => response.json() )
    //   .then( geocodeInfo => {
    //     const center = (( geocodeInfo.results[ 0 ] || {} ).geometry || {} ).location || DEFAULT_CENTER
    //
    //     this.setState({ zipCode, theaters, center })
    //   })
  }

  render() {
    return (
       <div>
        <h2>Hello Buddy</h2>
      </div>
    )
  }
}

export default TheaterDetails
