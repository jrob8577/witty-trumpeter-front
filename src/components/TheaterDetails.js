import React, { Component } from 'react'
import MovieListing from './MovieListing'
import Header from './Header';

const API = process.env.MOVIE_API || 'http://localhost:4000'

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

  favoriteClass() {
    const data = window.localStorage.movieNerd

    if( data && data === this.state.id ) {
      return 'glyphicon-star'
    } else {
      return 'glyphicon-star-empty'
    }
  }

  setFavorite( event ) {
    const parent = event.target
    const child = parent.children[ 0 ]

    if( child.classList.contains( 'glyphicon-star-empty' ) ) {
      child.classList.add( 'glyphicon-star' )
      child.classList.remove( 'glyphicon-star-empty' )

      localStorage.setItem( 'movieNerd', this.state.id )
    } else {
      child.classList.add( 'glyphicon-star-empty' )
      child.classList.remove( 'glyphicon-star' )

      localStorage.removeItem( 'movieNerd' )
    }
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
            <h1 className="Theater-Name"><strong>{this.state.name}</strong></h1>            
            <button type="button" className="btn btn-default btn-lg" onClick={this.setFavorite.bind(this)}>
              <span className={`glyphicon ${this.favoriteClass()}`}></span> Favorite
            </button>

            <h3>{this.state.address}</h3>
            <h3>{this.state.phoneNumber}</h3>
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
