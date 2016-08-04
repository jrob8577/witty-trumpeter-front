import React, { Component } from 'react'
import MovieListing from './MovieListing'
import Header from './Header';


const API = 'http://localhost:4000'

class TheaterDetails extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      name: '',
      address: '',
      movies: []
    }
  }

  componentDidMount() {
    fetch( `${API}/theater/${this.props.routeParams.theaterId}`, { mode: 'cors' } )
      .then( response => response.json() )
      .then( theater => this.setState({...theater}))
  }

  movieList() {
    return this.state.movies.map( (movie, index) =>
      <MovieListing {...movie} key={`movie-${index}`} />
    )
  }

  hideModal( event ) {
    const element = document.querySelector( '#trailer-modal' )

    element.classList.remove( 'show-modal' )
    element.innerHTML = ''
  }

  render() {
    return (
      <div>
        <div className="comic-modal-one" id="trailer-modal" onClick={this.hideModal.bind(this)}></div>

        <div className="map-background">
          <Header />
          <br/>
          <br/>
          <br/>
          <div className="container">
            <h1><strong>{this.state.name}</strong></h1>
            <h4>{this.state.address}</h4>
            <h5>{this.state.phoneNumber}</h5>
            <div className="movie-listing">
              {this.movieList()}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default TheaterDetails
