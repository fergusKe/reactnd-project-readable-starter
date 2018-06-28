import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Readable</a>
          <div className="d-flex justify-content-end">
            <span className="navbar-text">
              Navbar text
            </span>
            <button className="btn btn-outline-light ml-2" type="button">login</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
