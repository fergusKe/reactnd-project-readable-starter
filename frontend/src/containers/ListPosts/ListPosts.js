import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import PostItem from '../../components/PostItem/PostItem';
import { getAllPosts } from '../../actions';

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <div className="container">
          <Categories />
          <div className="mt-5" />
          {
            posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))
          }
        </div>
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
