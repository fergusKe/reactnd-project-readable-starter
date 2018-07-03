import { combineReducers } from 'redux';

import counter from './counter';
import categories from './categories';
import posts from './posts';
import sortType from './sortType';

export default combineReducers({
  counter,
  categories,
  posts,
  sortType
});
