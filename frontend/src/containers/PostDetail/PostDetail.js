import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import PostItem from '../../components/PostItem/PostItem';
import Comments from '../../components/Comments/Comments';
import { getAllPosts, getPostComments } from '../../actions';
import { getPosts } from '../../selectors';

class PostDetail extends PureComponent {
  state = {
    post: {},
  }
  componentDidMount() {
    this.props.getAllPosts().then(() => {
      const { posts } = this.props;
      const id = this.props.match.params.post_id;
      const post = posts.filter(p => (
        p.id === id
      ))[0];

      this.setState({
        post,
      });

      // console.log('getPostComments = ', getPostComments);
      // console.log('id = ', post.id);
      this.props.getPostComments(post.id).then((res) => {
        console.log('res = ', res);
      });
    });
  }

  render() {
    const { post } = this.state;
    console.log('post = ', post);

    return (
      <Layout>
        <div className="container">
          <div className="mt-5" />
          {
            Object.keys(post).length > 0
            ? <PostItem key={post.id} post={post} />
            : null
          }
          <Comments />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: getPosts(state, props)
});

const mapDispatchToProps = {
  getAllPosts,
  getPostComments
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
