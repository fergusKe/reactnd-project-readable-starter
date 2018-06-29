import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getAllCategories
} from '../../actions';

class Categories extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="container mt-5">
        <div className="row justify-content-around">
          <button type="button" className="btn btn-secondary">All</button>
          {
            categories.map(category => (
              <button key={category.name} type="button" className="btn btn-secondary">{category.name}</button>
            ))
          }
          <div className="dropdown">
            <button className="btn bg-info text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Newest
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Newest</a>
              <a className="dropdown-item" href="#">Oldest</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = {
  getAllCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
