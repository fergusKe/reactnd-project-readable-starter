import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import PostItem from '../../components/PostItem/PostItem';
import { getAllPosts, getCategoryPosts } from '../../actions';

import { getPosts } from '../../selectors';

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    // console.log('this.props.match.params.name = ', this.props.match.params.name);
    // this.props.getCategoryPosts(this.props.match.params.name);
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
  // posts: state.posts
});

const mapDispatchToProps = {
  getAllPosts,
  // getCategoryPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
