import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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
      <div className="row justify-content-around mt-5">
        <button type="button" className="btn btn-secondary">All</button>
        {
          categories.map(category => (
            <Link key={category.name} to={`/categories/${category.name}`}>
              <button type="button" className="btn btn-secondary">{category.name}</button>
            </Link>
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
