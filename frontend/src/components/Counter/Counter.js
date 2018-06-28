import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increate,
  decreate
} from '../../actions';

class Counter extends Component {
  render() {
    return (
      <div>
        Counter
        <div className="num">{this.props.counter}</div>
        <button onClick={this.props.increate}>增加</button>
        <button onClick={this.props.decreate}>減少</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increate,
  decreate
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
