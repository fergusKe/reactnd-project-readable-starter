import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Main from './containers';

import './stylesheets/common.scss';
import './stylesheets/index.scss';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>,
    document.getElementById('wrap'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
