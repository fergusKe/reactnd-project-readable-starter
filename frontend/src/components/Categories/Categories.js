import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-around">
          <button type="button" className="btn btn-secondary">All</button>
          <button type="button" className="btn btn-secondary">React</button>
          <button type="button" className="btn btn-secondary">Redux</button>
          <button type="button" className="btn btn-secondary">Udacity</button>
          <div className="dropdown">
            <button className="btn bg-info text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Oldest
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Oldest</a>
              <a className="dropdown-item" href="#">Newest</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
