import React, { Component } from 'react'

const SHITTY_STRINGS = [
  ': An IMAX 3D Experience',
  'in 3D',
  '3D'
]

export default class MovieListing extends Component {
  constructor( props ) {
    super( props )
    this.state = { tmdb: { poster_path: '' } }
  }

  componentDidMount() {
    const movieName = SHITTY_STRINGS.reduce( (original, s) => original.replace( s, ''), this.props.name ).trim()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d7a2ad942b8834e7c5b0ca0de117f321&query=${movieName}`

    fetch(url, { mode: 'cors' } )
      .then( response => response.json() )
      .then( tmdb => this.setState({ tmdb: tmdb.results[0] }) )
  }

  showtimesList() {
    const { showtimes, showtime_tickets } = this.props

    return showtimes.map( (showtime, index) => {
      const ticketLink = (showtime_tickets || {})[ showtime ]

      if( ticketLink ) {
        return <a href={ticketLink} target="_blank" key={`st-${index}`}>{showtime}</a>
      } else {
        return <span className="no-ticket" key={`st-${index}`}>{showtime}</span>
      }
    })
  }

  render() {
    return (
      <div className="movie jumbotron">
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.tmdb.poster_path}`} alt="poster" /> 

        <h2>{this.props.name}</h2>
        <div className="runtime">{this.props.runtime}</div>
        <div className="rating label label-primary">{this.props.rating}</div>
        <div className="genres">{this.props.genre.join(' ')}</div>

        <div className="showtimes">
          {this.showtimesList()}
        </div>

        <div className="trailer">
          {this.props.trailer}
        </div>
        <br/>
      </div>
    )
  }
}