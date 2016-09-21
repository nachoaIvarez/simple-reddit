import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import reducer from './state/reducer';

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  thunk,
)(createStore);

export default createStoreWithMiddleware(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
);
