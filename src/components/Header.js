import React, { Component } from 'react';
import ZipcodeForm from './ZipcodeForm';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">MovieNerd</a>
          </div>

          <ZipcodeForm zipCode={this.props.zipCode} zipCodeEntered={this.props.zipCodeEntered} />
        </div>
      </nav>
    );
  }
}

export default Header
