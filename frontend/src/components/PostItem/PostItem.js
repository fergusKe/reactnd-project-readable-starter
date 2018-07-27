import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getFormatDate } from '../../utils/helps';
import './PostItem.scss';

import { deletePost, upVotePost, downVotePost } from '../../actions';

class PostItem extends Component {
  render() {
    const {
      post,
      upVotePostApi,
      downVotePostApi,
      deletePostApi
    } = this.props;

    return (
      <div className="row">
        <div className="media border w-100 p-3 mb-3">
          <img className="rounded-circle mr-3" src="https://fakeimg.pl/64x64/?text=avatar" alt="" />
          <div className="media-body">
            <h5 className="mt-0">{post.title}</h5>
            <div className="author mr-2">
              <i className="fas fa-user mr-1" />
              {post.author}
            </div>
            <div className="time">
              <i className="fas fa-clock mr-1" />
              {getFormatDate(post.timestamp)}
            </div>
            <div className="content mt-2 mb-2">
              {post.body}
            </div>
            <div className="vote mr-2">
              <div className="like mr-2">
                <i
                  className="fas fa-thumbs-up"
                  onClick={() => upVotePostApi(post.id)}
                />
              </div>
              <div className="unlike">
                <i
                  className="fas fa-thumbs-down"
                  onClick={() => downVotePostApi(post.id)}
                />
              </div>
              <span className="badge">{post.voteScore}</span>
            </div>
            <div className="comment">
              <i className="fas fa-comment" />
              <span className="badge">{post.commentCount}</span>
            </div>
            <div className="row justify-content-end pr-3">
              <Link to={`/posts/${post.id}/edit`}>
                <button type="button" className="btn btn-outline-success">Edit</button>
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger ml-2"
                onClick={() => deletePostApi(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deletePostApi: deletePost,
  upVotePostApi: upVotePost,
  downVotePostApi: downVotePost
};

export default connect(null, mapDispatchToProps)(PostItem);
