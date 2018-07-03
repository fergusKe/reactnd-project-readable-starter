import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {
  getAllCategories,
  setSortType
} from '../../actions';

class Categories extends Component {
  state = {
    sortArr: ['Newest', 'Oldest', 'Popular', 'Unpopular']
  }
  componentDidMount() {
    this.props.getAllCategories();
  }
  handleSortType = (item) => {
    this.props.setSortType(item);
  }
  render() {
    const { categories, sortType } = this.props;
    const { sortArr } = this.state;
    return (
      <div className="row justify-content-around mt-5">
        <Link to="/categories/all">
          <button type="button" className="btn btn-secondary">All</button>
        </Link>
        {
          categories.map(category => (
            <Link key={category.name} to={`/categories/${category.name}`}>
              <button type="button" className="btn btn-secondary">{category.name}</button>
            </Link>
          ))
        }
        <div className="dropdown">
          <button className="btn bg-info text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {sortType}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              sortArr.map(item => (
                <a
                  key={item}
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.handleSortType(item)}
                >
                  {item}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  sortType: state.sortType
});

const mapDispatchToProps = {
  getAllCategories,
  setSortType
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
