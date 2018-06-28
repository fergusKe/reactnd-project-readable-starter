import React, {
  Component
} from 'react';
import $ from 'jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';

class Home extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Categories />
      </div>
    );
  }
}

export default Home;
