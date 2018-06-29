import React, { Component } from 'react';

import Media from '../Media/Media';
import './Comments.scss';

class Comments extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h1>Comments</h1>
        <div className="form-group mt-3">
          <form>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
          </form>
        </div>
        <Media />
        <Media />
      </div>
    );
  }
}

export default Comments;
