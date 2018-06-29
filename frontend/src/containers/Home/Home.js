import React, {
  Component
} from 'react';
import $ from 'jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Media from '../../components/Media/Media';
import Comments from '../../components/Comments/Comments';

class Home extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Categories />
        <div className="mt-5" />
        <Media />
        <Comments />
      </div>
    );
  }
}

export default Home;
