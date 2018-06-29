import { combineReducers } from 'redux';

import counter from './counter';
import categories from './categories';

export default combineReducers({
  counter,
  categories
});
