import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import PostItem from '../../components/PostItem/PostItem';
import { getAllPosts } from '../../actions';

import { getPosts } from '../../selectors';

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { posts, match, location } = this.props;
    // console.log('ListPost match = ', match);
    // console.log('location = ', location);
    console.log('posts = ', posts);
    return (
      <Layout>
        <div className="container">
          <Categories />
          <div className="mt-5" />
          <div className="row">
            <Link to="/posts/new">
              <button type="button" className="btn btn-outline-info mb-3">Add Post</button>
            </Link>
          </div>
          {
            posts.length ? posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))
            : 'No post!'
          }
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: getPosts(state, props)
});

const mapDispatchToProps = {
  getAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
