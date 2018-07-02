import { combineReducers } from 'redux';

import counter from './counter';
import categories from './categories';
import posts from './posts';

export default combineReducers({
  counter,
  categories,
  posts
});
