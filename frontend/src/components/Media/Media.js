import React, { Component } from 'react';

import './Media.scss';

class Media extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="media border p-3 mb-3">
            <img className="rounded-circle mr-3" src="https://fakeimg.pl/64x64/?text=avatar" alt="" />
            <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              <div className="author mr-2">
                <i className="fas fa-user mr-1" />
                xxx
              </div>
              <div className="time">
                <i className="fas fa-clock mr-1" />
                2018-06-27 10:22
              </div>
              <div className="content">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              <div className="like mr-2">
                <i className="fas fa-thumbs-up" />
                <span className="badge">1</span>
              </div>
              <div className="unlike mr-2">
                <i className="fas fa-thumbs-down" />
                <span className="badge">2</span>
              </div>
              <div className="comment">
                <i className="fas fa-comment" />
                <span className="badge">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
