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

  embedLink() {
    const { trailer } = this.props

    const watch = 'http://www.youtube.com/watch?v='
    const embed = 'http://www.youtube.com/embed/'

    return trailer.replace( watch, embed )
  }

  toggleTrailer( event ) {
    const element = document.querySelector( '#trailer-modal' )

    element.innerHTML =
      `<div><div><iframe src=${this.embedLink()} width="560" height="315"
        frameBorder="0" allowFullScreen>
      </iframe></div></div>`

    element.classList.add( 'show-modal' )
  }

  image() {
    if( this.state.tmdb.poster_path ) {
      return <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.tmdb.poster_path}`} alt="poster" />
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-4">
            {this.image()}
          </div>
          <div className="col-md-8">
            <h1>{this.props.name}</h1>
            <h4>{this.props.runtime}</h4>
            <div className="rating label label-primary">{this.props.rating}</div>
            <div className="genres">{this.props.genre.join(' ')}</div>

            <div className="showtimes">
              {this.showtimesList()}
            </div>
            <div><a className="imbd btn btn-primary" href={`${this.props.imdb}`}>Imdb</a></div>

            <div className="trailer">
              <button className="btn btn-danger"
                onClick={this.toggleTrailer.bind(this)}>Trailer</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
