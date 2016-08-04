import React, { Component } from 'react'

class ZipcodeForm extends Component {
  textEntered( event ) {
    this.zip = event.target.value
  }

  submit( event ) {
    event.preventDefault()

    const element = document.querySelector( '.navbar-left .form-group' )
    element.classList.remove( 'has-error' )

    if( this.zip.length === 5 ) {
      this.props.zipCodeEntered( this.zip )
    } else {
      element.classList.add( 'has-error' )
    }
  }

  render() {
    return (
      <form className="navbar-form navbar-left zip-code-form">
        <div className="form-group">
          <input type="text" onKeyUp={this.textEntered.bind(this)} value={this.props.zipCode}
            className="form-control" placeholder="Zip Code" />
        </div>

        <button type="submit" onClick={this.submit.bind(this)}
          className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default ZipcodeForm
