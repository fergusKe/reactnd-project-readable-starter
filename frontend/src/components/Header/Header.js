import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Readable</a>
        </div>
      </nav>
    );
  }
}

export default Header;
