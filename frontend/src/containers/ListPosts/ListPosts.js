import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import { getAllPosts } from '../../actions';

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    return (
      <Layout>
        ListPosts
        <Categories />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  getAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
