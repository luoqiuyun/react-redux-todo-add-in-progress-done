import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import tasks from './store/reducers/tasks-reducer';
import mockData from './services/mock-data';

const title = 'My Minimal React Webpack Babel Setup';

const store = createStore(
  tasks,
  mockData
);

render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();