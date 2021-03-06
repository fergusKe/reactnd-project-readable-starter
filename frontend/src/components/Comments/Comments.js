import React, { Component } from 'react';

import './Comments.scss';

class Comments extends Component {
  render() {
    return (
      <div className="row mt-3 comments">
        <h1 className="w-100">Comments</h1>
        <form className="w-100">
          <div className="form-group mt-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Comments;
